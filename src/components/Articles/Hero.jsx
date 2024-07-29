import png1 from '../../assets/pexels-vlada-karpovich-4050347.png'

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-64 opacity-90" style={{ backgroundImage: `url(${png1})`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
          <h2 className="text-4xl font-bold ">Articles</h2>
          <p className="text-lg text-center"> Discover in-depth articles that provide valuable knowledge</p>
        </div>
      </section>
  );
};

export default Hero;
