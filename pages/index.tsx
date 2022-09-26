import HeroSection from "components/hero-section";
import type { NextPage } from "next";
import GettingStarted from "components/get-started";
import CareSection from "components/take-care-section";
import BlogSection from "components/blog-section";

const Home: NextPage = () => {
  return (
    <div className="space-y-7">
      <HeroSection />
      <CareSection />
      <BlogSection />
      <GettingStarted />
    </div>
  );
};

export default Home;
