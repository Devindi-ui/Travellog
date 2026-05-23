import Hero from "./components/Hero";
import Packages from "./sections/Packages";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero/>
      <Packages/>
      <Gallery/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;