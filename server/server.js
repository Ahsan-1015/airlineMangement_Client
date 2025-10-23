import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI; // from .env file

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    // 🔹 Access skyWings database
    const db = client.db("skyWings");

    // 🔹 Access collections
    const bookingsCollection = db.collection("bookings");
    const usersCollection = db.collection("users");
    const flightsCollection = db.collection("flights");

    // 🔹 Middleware to verify JWT and check admin role
    const verifyAdmin = async (req, res, next) => {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).send({ message: "Unauthorized access" });
      }

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await usersCollection.findOne({ email: decoded.email });
        if (user?.role !== "admin") {
          return res.status(403).send({ message: "Forbidden access" });
        }
        req.user = user;
        next();
      } catch (err) {
        res.status(401).send({ message: "Invalid token" });
      }
    };

    // 🔹 User Registration
    app.post("/register", async (req, res) => {
      try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
          email,
          password: hashedPassword,
          role: "user", // Default role
        };
        const result = await usersCollection.insertOne(user);
        res.status(201).send(result);
      } catch (err) {
        res
          .status(500)
          .send({ message: "Failed to register user", error: err });
      }
    });

    // 🔹 User Login
    app.post("/login", async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await usersCollection.findOne({ email });
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).send({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
          { email: user.email, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.send({ token });
      } catch (err) {
        res.status(500).send({ message: "Failed to login", error: err });
      }
    });

    // ✅ Test route
    app.get("/", (req, res) => {
      res.send("SkyWings Booking Server running ✈️");
    });

    // 🔹 Add booking
    app.post("/bookings", async (req, res) => {
      try {
        const booking = req.body;
        const result = await bookingsCollection.insertOne(booking);
        res.status(201).send(result);
      } catch (err) {
        res.status(500).send({ message: "Failed to add booking", error: err });
      }
    });

    // 🔹 Get all bookings
    app.get("/bookings", async (req, res) => {
      let query = {};
      if (req.query.email) {
        query = { "user.email": req.query.email };
      }
      const result = await bookingsCollection.find(query).toArray();
      res.send(result);
    });

    // 🔹 Get bookings by user ID
    app.get("/bookings/:userId", async (req, res) => {
      const userId = req.params.userId;
      const result = await bookingsCollection.find({ userId }).toArray();
      res.send(result);
    });

    // 🔹 Cancel booking
    app.patch("/bookings/:id/cancel", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updated = { $set: { status: "Cancelled", category: "cancelled" } };
      const result = await bookingsCollection.updateOne(filter, updated);
      res.send(result);
    });

    // 🔹 Get all users (for admin)
    app.get("/users", verifyAdmin, async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // 🔹 Make user admin (for admin)
    app.patch("/users/:id/make-admin", verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updated = { $set: { role: "admin" } };
      const result = await usersCollection.updateOne(filter, updated);
      res.send(result);
    });

    // 🔹 Check if user is admin
    app.get("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const user = await usersCollection.findOne({ email });
      res.send({ isAdmin: user?.role === "admin" });
    });

    // 🔹 Save user to database
    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const query = { email: user.email };
        const existingUser = await usersCollection.findOne(query);
        if (existingUser) {
          return res.send({ message: "User already exists" });
        }
        const result = await usersCollection.insertOne(user);
        res.status(201).send(result);
      } catch (err) {
        res.status(500).send({ message: "Failed to save user", error: err });
      }
    });

    // 🔹 JWT
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // 🔹 Logout
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: true,
            sameSite: "none",
          })
          .send({ success: true });
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // 🔹 Get all flights
    app.get("/flights", async (req, res) => {
      const result = await flightsCollection.find().toArray();
      res.send(result);
    });

    console.log("✅ SkyWings DB connected successfully");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
}
run();
