import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateUserProfile(name, photo)
      .then(() => {
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to update profile.");
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">My Profile</h1>
      <p className="text-gray-500">Update your profile information</p>

      <form onSubmit={handleUpdateProfile} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="photo" className="block font-semibold">
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-purple-600 rounded-lg"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
