import HeroSection from "components/hero-section";
import type { NextPage } from "next";
import GettingStarted from "components/get-started";
import CareSection from "components/take-care-section";
import TaskSection from "components/task-section";
import TrackSection from "components/track-section";
import BlogSection from "components/blog-section";
import ClientSpeak from "components/client-speak/index"

const Home: NextPage = () => {
  return (
    <div className="space-y-7">
      <HeroSection />
      <ClientSpeak />
      <CareSection />
      <TaskSection/>
      <TrackSection/>
      <BlogSection />
      <GettingStarted />
    </div>
  );
};

export default Home;
