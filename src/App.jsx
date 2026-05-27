import Hero from "./components/Hero";
import Packages from "./sections/Packages";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Hero/>
      <Packages/>
      <Gallery/>
      <Testimonials/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;