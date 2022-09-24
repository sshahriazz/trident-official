import HeroSection from "components/hero-section";
import type { NextPage } from "next";
import GettingStarted from "../components/get-started";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <GettingStarted />
    </>
  );
};

export default Home;
