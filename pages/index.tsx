import HeroSection from "components/hero-section";
import type { NextPage } from "next";
import GettingStarted from "components/get-started";
import BlogSection from "components/blog-section";

const Home: NextPage = () => {
  return (
    <div className="space-y-7">
      <HeroSection />
      <BlogSection />
      <GettingStarted />
    </div>
  );
};

export default Home;
