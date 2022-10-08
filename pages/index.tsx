import HeroSection from "components/hero-section";
import type { NextPage } from "next";
import GettingStarted from "components/get-started";
import CareSection from "components/take-care-section";
import TaskSection from "components/task-section";
import TrackSection from "components/track-section";
import BlogSection from "components/blog-section";
import ClientSpeak from "components/client-speak/index";
import { NextSeo } from "next-seo";
import ClientQuote from "components/client-quote";
import Flow from "components/flow";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        //50-60char
        title="Trident Digital Agency"
        description="TA team whose experience is as sharp as a trident. If you want to build quality software then trident is the best place. Quality is our best priority"
        canonical="https://www.teamtrident.co/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="space-y-7">
        <HeroSection />
        <ClientSpeak />
        <Flow />

        <CareSection />
        <TaskSection />
        <TrackSection />
        <BlogSection />
        <ClientQuote />
        <GettingStarted />
      </div>
    </>
  );
};

export default Home;
