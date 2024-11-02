function Counsellors({name,details,imageSrc,floatDirection=`left`}) {
    //Determine the float direction class based on the direction prop 
    const floatClass=floatDirection==='right'?'float-right':'float-left';

    return (
      <div className="container mx-auto p-4 mt-4  ">
        {/* Image Div */}
        <div className="float-left">
          <img
            //src="/src/assets/pexels-divinetechygirl-1181686.jpg"
            src={imageSrc}
            alt={name}
            className="w-full md:w-48 h-auto object-cover rounded-lg border-4 border-white shadow-lg"
          />
        </div>
        {/* Text Div */}
        <div className="text-lg text-left ">
          <p>
            <span className="font-bold text-black"> {name} </span> 
            {details}
          </p>
        </div>
      </div>
    );
  }
  
  export default Counsellors;
  