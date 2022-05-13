import Link from "next/link"

function MainInterface() {
  return (
    <div className="flex-1 p-4 ">
      <div className="flex justify-between mx-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt="uber logo"
          className="h-20"
        />
        <div className="flex items-center ">
          <div className="mr-4">Saumaun V</div>
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Ggs5s6jsBTjOr7PiFCMC6zWgDCO9MnZ6HHxsze-mQ=s96-c-rg-br100"
            alt="google user image"
            className="h-12 rounded-full border border-gray-200 p-px"
          />
        </div>
      </div>

      <div className="flex mt-4">
        <Link href="/search">
          <div
            className="flex flex-col flex-1 bg-gray-200 m-3 h-32 items-center justify-center rounded-lg
        transform hover:scale-105 transition cursor-pointer"
          >
            <img
              className="h-3/5"
              src="https://i.ibb.co/cyvcpfF/uberx.png"
              alt="Ride"
            />
            Ride
          </div>
        </Link>
        <div
          className="flex flex-col flex-1 bg-gray-200 m-3 h-32 items-center justify-center rounded-lg
        transform hover:scale-105 transition cursor-pointer"
        >
          <img
            className="h-3/5"
            src="https://i.ibb.co/n776JLm/bike.png"
            alt="Ride"
          />
          Wheels
        </div>
        <div
          className="flex flex-col flex-1 bg-gray-200 m-3 h-32 items-center justify-center rounded-lg
        transform hover:scale-105 transition cursor-pointer"
        >
          <img
            className="h-3/5"
            src="https://i.ibb.co/5RjchBg/uberschedule.png"
            alt="Ride"
          />
          Reserve
        </div>
      </div>

      <div className="flex items-center bg-gray-200 h-20 m-3 mt-8 p-4 text-2xl">
        Where to?
      </div>
    </div>
  );
}

export default MainInterface