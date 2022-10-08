import HeroSection from "components/hero-section";
import type { NextPage } from "next";
import GettingStarted from "components/get-started";
import CareSection from "components/take-care-section";
import TaskSection from "components/task-section";
import TrackSection from "components/track-section";
import BlogSection from "components/blog-section";
import ClientSpeak from "components/client-speak/index";
import ClientQuote from "components/client-quote";
import Flow from "components/flow";
const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="py-12"><HeroSection /></div>
        <div className="py-12"><ClientSpeak /></div>
        <div className="py-12"><Flow /></div>
        <div className="py-12"><CareSection /></div>
        <div className="py-12"><TaskSection /></div>
        <div className="py-12"><TrackSection /></div>
        {/* <div className="py-12"><BlogSection /></div> */}
        <div className="py-12"><ClientQuote /></div>
        <div><GettingStarted /></div>
      </div>
    </>
  );
};

export default Home;
