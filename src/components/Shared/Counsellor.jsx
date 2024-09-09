import png1 from '/src/assets/pexels-vlada-karpovich-4050347.png'

function Counsellor() {
  return (
    <div className='container mx-auto flex flex-col md:flex-row p-4 mt-4'>
        <div className='w-full md:w-1/2 flex flex-col text-lg font-semibold p-4'>

            <h2 className="font-bold text-2xl"> Talk to Counsellor </h2>
            <p className="mt-2 mb-2">
                Lorem Ipsum dolor sit amet Arcu lacus habitaste 
                pellentesque mi. Sclerisquw alit volutpat elit psuere
                 justo non tincidunt tincidunt. In ay proin sed consectetur convallis sit imperdiet


            </p>
            <button className="text-left rounded-md text-white px-4 py-2 bg-green-700 w-[150px] hover:bg-green-600"> Book Session </button>

        </div>

        <div className="w-full md:w-1/2 rounded-md flex items-center justify-center ">
                <img src={png1} alt='img' className="max-w-full" />

        </div>
      
    </div>
  )
}

export default Counsellor
