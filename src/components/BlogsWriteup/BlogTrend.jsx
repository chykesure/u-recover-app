import png1 from '/src/assets/pexels-vlada-karpovich-4050347.png'

function BlogTrend() {
  return (
    <div className="container mx-auto p-4 mt-4 flex flex-col md:flex-row space-x-4 ">

        <div className="w-full md:w-1/2 mr-2 flex flex-col">

            <div className=''>
                <img src={png1} alt='img' className="w-full "/>
                <strong className="text-sm font-sm"> Holiness </strong>
            </div>
            <div>
                <h2 className="text-2xl font-bold"> Living a Life of Holiness </h2>
                <p className="text-sm"> Lorem Ipsum dolor sit amet Consecteur . faucibis id oursus
                    The Popliteal fossa is a transmitting neurovascular structure posterior to the knee
                    The Boundaries of the Popliteal fossa. 
                    The superior lateral boder is the Biceps femoris
                    The superior medial border is are the semitendinosus and semimebranosus
                    The inferior lateral boarder is the lateral head of the gastrocnemius 
                    The inferior medial border is the medial head of the gastrocnemius
                    The floor of the Popliteal fossa includes the Popliteus muscle
                    The roof of the popliteal fossa include the superficial and deep popliteal fasica, and the skin 
                    The contents of the popliteal fossa include the saphenous vein, the popliteal arteries and vein...
                    <a href='#' className="text-green-600 hover:text-green-500 text-sm"> See More</a> 
                </p>
                
            </div>

        </div>

        <div className="w-full md:w-1/2 ml-2 flex flex-col ">

            <div className="mb-4">
                <h2 className="font-bold text-green-800"> Trending Blogs </h2>
            </div>
         
            <div className="flex flex-row justify-center items-center p-4 space-x-2 rounded-md shadow-md">
                
                <div className="w-1/2 "> <img src={png1} alt='img'/></div>
                <div className="w-1/2 flex flex-col"> 
                        <h3 className="text-sm text-lg"> Health </h3>    
                        <h2 className="font-semibold text-xl"> Living a Life of Holiness </h2>
                        <h3 className="text-sm"> By Hannah Linus </h3>
                 </div>

            </div>
            <div className="flex flex-row justify-center items-center p-4 space-x-2 rounded-md shadow-md">
                
                <div className="w-1/2 "> <img src={png1} alt='img'/></div>
                <div className="w-1/2 flex flex-col"> 
                        <h3 className="text-sm text-lg"> Health </h3>    
                        <h2 className="font-semibold text-xl"> Living a Life of Holiness </h2>
                        <h3 className="text-sm"> By Hannah Linus </h3>
                 </div>

        </div>
        <div className="flex flex-row justify-center items-center p-4 space-x-2 rounded-md shadow-md">
                
                <div className="w-1/2 "> <img src={png1} alt='img'/></div>
                <div className="w-1/2 flex flex-col"> 
                        <h3 className="text-sm text-lg"> Health </h3>    
                        <h2 className="font-semibold text-xl"> Living a Life of Holiness </h2>
                        <h3 className="text-sm"> By Hannah Linus </h3>
                 </div>

        </div>







        </div>
        
      
    </div>
  )
}

export default BlogTrend
