import ExclusiveOffers from "./Home/ExclusiveOffers/ExclusiveOffers"
import FeaturedDestination from "./Home/FeaturedDestination/FeaturedDestination"
import Footer from "./Home/Footer/Footer"
import Guests from "./Home/Guests/Guests"
import MainHome from "./Home/MainHome"
import { useEffect } from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <MainHome />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Guests />
        <Footer />
      </Router>
    </>
  )
}

export default App
