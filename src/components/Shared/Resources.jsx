import png1 from '/src/assets/Deeper-life-logo-final-outlines-.png'
function Resources() {
  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center mt-4'>


            <div>
                <h1> Resources </h1>
                
            </div>
            <div className='container mx-auto p-4 flex flex-col md:flex-row w-full  '>
                
                <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600  m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png1} alt='image' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md"/></div>
                        <div className="flex items-center justify-center"> <h2 className="text-sm text-center font-bold"> Deeper Christian Life Ministry </h2></div>
                       
                </div>
                <div className="w-full md:w-1/4 p-2 m-2">
                <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png1} alt='image' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md"/></div>
                        <div className="flex items-center justify-center"> <h2 className="text-sm text-center font-bold"> Billy Graham Evangelical Association</h2></div>
                       
                </div>
                <div className="w-full md:w-1/4 p-2 m-2">
                <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png1} alt='image' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md"/></div>
                        <div className="flex items-center justify-center"> <h2 className="text-sm text-center font-bold"> U-Recover </h2></div>
                       
                </div>
                <div className="w-full md:w-1/4 p-2 m-2">
                <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png1} alt='image' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md"/></div>
                        <div className="flex items-center justify-center"> <h2 className="text-sm text-center font-bold"> U - Recover </h2></div>
                       
                </div>
              
              

            </div>

        
      
    </div>
  )
}

export default Resources
