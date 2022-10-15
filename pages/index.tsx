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
import { NextSeo } from "next-seo";
const Home: NextPage = () => {
  return (
    <>

      <NextSeo
        //50-60char
        title="Trident Digital Agency"
        description="Trident team, whose experience is as sharp as a trident. If you want to build quality software then trident is the best place. Quality is our best priority"
        canonical="https://www.teamtrident.co/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "../public/assets/images/trident-fb-banner.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "../public/assets/images/trident-fb-banner.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "../public/assets/images/trident-fb-banner.png" },
            { url: "../public/assets/images/trident-fb-banner.png" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <div>
        <div className="py-12"><HeroSection /></div>
        <div className="py-12"><ClientSpeak /></div>
        <div className="py-12"><Flow /></div>
        <div className="py-12"><CareSection /></div>
        <div className="py-12"><TaskSection /></div>
        <div className="py-12"><TrackSection /></div>
        {/* <div className="py-12"><BlogSection /></div> */}
        <div className="py-12"><ClientQuote /></div>
        <div className="py-12"><GettingStarted /></div>
      </div>
    </>
  );
};

export default Home;
