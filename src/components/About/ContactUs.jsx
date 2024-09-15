function ContactUs() {
    return (
      <div className="container antiinitialised mx-auto mb-4 max-w-4xl grid md:grid-cols-2 gap-2">
        <div className="w-full md-1/2 min-h-36 ">
          <img src="/src/assets/pexels-nurseryart-346734.png" alt="img" className="w-full h-full " />
        </div>
        <div className="w-full md-1/2 min-h-36 text-left text-lg p-4 ">
          <div className="mb-4">
            <h1 className="text-green-600 font-bold text-2xl mb-2"> Contact Us</h1>
            <h3 className="text-black font-bold"> Do you have any questions ? </h3>
          </div>
          <div>
          <form method="POST">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-green-600 p-2 rounded-lg placeholder-black placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Name" required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-green-600 p-2 rounded-lg placeholder-black placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email" required
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="resize-none w-full border border-green-600 p-2 rounded-lg placeholder-black placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  