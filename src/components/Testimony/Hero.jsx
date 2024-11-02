//import png1 from '../../assets/pexels-vlada-karpovich-4050347.png'
import png1 from '../../assets/pexels-pixabay-416405.png'

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-64 opacity-90" style={{ backgroundImage: `url(${png1})`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
          <h2 className="text-4xl font-bold ">Testimonies</h2>
          <p className="text-lg text-center"> And they overcame him by the blood of the Lamb, and by the word of their testimony </p>
        </div>
      </section>
  );
};

export default Hero;
