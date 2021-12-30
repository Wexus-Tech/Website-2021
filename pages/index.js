import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroContainer from "../components/IntroContainer/IntroContainer";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
// import Card from "../components/Projects/Card";
import Projects from "../components/Projects/index.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <IntroContainer />
      <OurServices />
      <Projects />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
