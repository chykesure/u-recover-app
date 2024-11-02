function Counselling() {
    return (
      <>
        <div className="container mx-auto p-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {/* Text Div */}
          <div className="flex flex-col justify-between">
            <p className="mb-4 text-lg text-left">
                <h2 className="font-semibold text-2xl mb-4"> Talk to Counsellor </h2>
                fugit. Est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt quaerat quos cumque asperiores, aut voluptatem, voluptate
              autem, blanditiis similique accusantium consequuntur esse! Temporibus
              ratione vitae nulla dicta perspiciatis in fugiat.
              explicabo deleniti eaque! Sapiente voluptatibus molestiae quae error.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut
              perspiciatis illo tempora iste, commodi nesciunt natus eveniet debitis
              unde hic nostrum ex sapiente, dolor sequi maxime. Consequatur, harum
              ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              atque naus modi voluptatibus accusamus mollitia. Perferendis
              accusantium deleniti laborum provident consequatur quos dignissimos
              voluptatum similique, quo aliquam impedit explicabo consectetur?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
              quibusdam? Eius magni, eaque porro sapiente iure minus sint cumque
              quas eligendi quasi soluta, asperiores nemo iste expedita consequuntur
              fugit. Est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt quaerat quos cumque asperiores, aut voluptatem, voluptate
              autem, blanditiis similique accusantium consequuntur esse! Temporibus
              ratione vitae nulla dicta perspiciatis in fugiat.
            </p>
            <button className="text-white font-semibold px-4 py-2 bg-green-700 rounded-md self-start">
              Book session
            </button>
          </div>
  
          {/* Image Div */}
          <div className="w-full flex justify-center">
            <img
              src="/src/assets/pexels-divinetechygirl-1181686.jpg"
              alt="Counsellor"
              className="w-full h-full md:w-full h-64 object-cover rounded-lg border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </>
    );
  }
  
  export default Counselling;
  