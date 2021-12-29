import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroContainer from "../components/IntroContainer/IntroContainer";
import OurServices from "../components/OurServices";

export default function Home() {
  return (
    <div>
      <Header />
      <IntroContainer />
      <OurServices />
      <AboutUs />
      <Footer />
    </div>
  );
}
