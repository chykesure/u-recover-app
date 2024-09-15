import Header from "../Shared/Header"
import CoreValue from "./CoreValue"
import Paragraph from "./Paragraph"
import Mission from "./Mission"
import Vision from "./Vision"
import AboutHero from "./AboutHero"
import ContactUs from "./ContactUs"
import Leadership from "./Leadership"

import Footer from "../Shared/Footer"
function MainAboutPage() {
  return (
    <div className="antiinitialised text-2xl">

        <Header />
        <AboutHero />
        <Paragraph />
        <Mission />
        <Vision />
        <CoreValue />
        <Leadership />
        <ContactUs />
        <Footer />
      
    </div>
  )
}

export default MainAboutPage
