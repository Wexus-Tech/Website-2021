import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroContainer from "../components/IntroContainer/IntroContainer";
import OurServices from "../components/OurServices";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <IntroContainer />
      <OurServices />
      <Footer />
    </div>
  );
}
