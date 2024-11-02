function Mission() {
    return (
      <div className="container antiinitialised mx-auto mt-4 max-w-4xl grid md:grid-cols-2 gap-2">
         <div className="w-full md-1/2 min-h-36  text-left text-lg p-4 md:order-first order-last  ">
          <div>
            <h1 className="text-green-600 font-bold text-2xl mb-2 "> Our Mission</h1>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quia
            animi incidunt sed corporis eveniet culpa recusandae et obcaecati
            ducimus, sit accusamus nemo perferendis atque iure repellendus
            sapiente reiciendis quidem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta libero placeat alias ipsa quas modi ducimus,
            sequi nostrum quisquam sed eum possimus consequatur odio deleniti
            quasi aliquid nobis. Excepturi, asperiores.
          </div>
        </div>
        <div className="w-full md-1/2 min-h-36 ">
          <img src="/src/assets/pexels-fauxels-3184292.png" alt="img" className="w-full h-full " />
        </div>
       
      </div>
    );
  }
  
  export default Mission;
  