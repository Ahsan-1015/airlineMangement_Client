const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-24 sm:pb-28 lg:pb-32 min-h-screen">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/0jsYmMQz/pexels-brett-sayles-29755475.jpg')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-28 text-center text-base-100">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Explore the World
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto text-base-200">
            Book your next adventure with confidence
          </p>
        </div>

        {/* Search card overlayed on hero image */}
        <div
          id="search"
          className="absolute left-1/2 -top-10 md:top-64  -translate-x-1/2 translate-y-1/2 w-11/12 max-w-5xl "
        >
          <div className="card rounded-3xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 ring-1 ring-white/10">
            <div className="card-body px-4 sm:px-8 md:py-10 lg:py-14">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 items-end">
                {/* From */}
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text text-xs text-base-content/60">
                      From
                    </span>
                  </label>
                  <div className="input input-bordered w-full flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-base-content/60 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25a6.75 6.75 0 00-6.75 6.75c0 4.21 3.54 8.48 5.46 10.62.67.73 1.91.73 2.58 0 1.92-2.14 5.46-6.41 5.46-10.62A6.75 6.75 0 0012 2.25zm0 9a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="New York "
                      className="grow bg-transparent outline-none"
                    />
                  </div>
                </div>

                {/* To */}
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text text-xs text-base-content/60">
                      To
                    </span>
                  </label>
                  <div className="input input-bordered w-full flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-base-content/60 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25a6.75 6.75 0 00-6.75 6.75c0 4.21 3.54 8.48 5.46 10.62.67.73 1.91.73 2.58 0 1.92-2.14 5.46-6.41 5.46-10.62A6.75 6.75 0 0012 2.25zm0 9a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="London"
                      className="grow bg-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text text-xs text-base-content/60">
                      Date
                    </span>
                  </label>
                  <div className="input input-bordered w-full flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-base-content/60"
                    >
                      <path d="M6.75 2.25a.75.75 0 0 1 .75.75V4.5h9V3a.75.75 0 0 1 1.5 0v1.5h.75A2.25 2.25 0 0 1 21.5 6.75v12A2.25 2.25 0 0 1 19.25 21H4.75A2.25 2.25 0 0 1 2.5 18.75v-12A2.25 2.25 0 0 1 4.75 4.5h.75V3a.75.75 0 0 1 .75-.75z" />
                    </svg>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      className="grow bg-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Class */}
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text text-xs text-base-content/60">
                      Class
                    </span>
                  </label>
                  <div className="relative w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-base-content/60 absolute left-3 top-1/2 -translate-y-1/2"
                    >
                      <path d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V6.75z" />
                    </svg>
                    <select className="select select-bordered w-full pl-9 bg-base-100 shadow-md rounded-lg">
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </select>
                  </div>
                </div>

                {/* Search button */}
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text opacity-0">Search</span>
                  </label>
                  <button className="btn w-full text-white bg-gradient-to-r from-primary to-purple-500 border-0">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
