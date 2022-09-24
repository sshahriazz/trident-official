import HeroSection from "components/hero-section";
import type { NextPage } from "next";
import GettingStarted from "../components/get-started";

const Home: NextPage = () => {
  return (
    <div className="space-y-7">
      <HeroSection />
      <GettingStarted />
    </div>
  );
};

export default Home;
