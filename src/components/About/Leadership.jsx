function Leadership() {
  return (
    <div className="antiinitialised bg-gray-200 min-h-[55vh] p-6 relative w-full mt-4 mb-4 ">
      <div className="container mx-auto max-w-2xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-green-600">
          {" "}
          Our Leadership Team{" "}
        </h1>
        <p className="text-center font-semibold text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          eligendi saepe voluptatem.
        </p>
      </div>

      <div className="container mx-auto max-w-2xl mt-10 grid gap-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <div className="relative min-h-36 shadow-sm flex items-center justify-center ">
          <div className="bg-yellow-500 w-full h-full"></div>
          <img
            src="/src/assets/pexels-moose-photos-170195-1587009-removebg-preview.png"
            alt="img"
            className="max-h-[200px] w-[200px] absolute transform -translate-y-[28px] z-10"
          />
          <div className=" text-sm  text-center max-h-[200px] w-[200px] absolute transform translate-y-[100px] z-10">
            {" "}
            <h1 className="font-bold "> George Freeman </h1>{" "}
            <span> Founder </span>
          </div>
        </div>

        <div className="relative min-h-36 shadow-sm flex items-center justify-center ">
          <div className="bg-blue-500 w-full h-full"></div>
          <img
            src="/src/assets/pexels-divinetechygirl-1181686-removebg-preview.png"
            alt="img"
            className="max-h-[200px] w-[200px] absolute transform -translate-y-[28px] z-10"
          />
          <div className=" text-sm  text-center max-h-[200px] w-[200px] absolute transform translate-y-[100px] z-10">
            {" "}
            <h1 className="font-bold "> Esther Godswill </h1> <span> CEO</span>
          </div>
        </div>
        <div className="relative min-h-36 shadow-sm flex items-center justify-center ">
          <div className="bg-yellow-500 w-full h-full"></div>
          <img
            src="/src/assets/pexels-moose-photos-170195-1587009-removebg-preview.png"
            alt="img"
            className="max-h-[200px] w-[200px] absolute transform -translate-y-[28px] z-10"
          />
          <div className=" text-sm  text-center max-h-[200px] w-[200px] absolute transform translate-y-[100px] z-10">
            {" "}
            <h1 className="font-bold "> James Maxwell </h1>
            <span> Product Manager </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
