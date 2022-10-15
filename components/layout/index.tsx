import { ReactNode, useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer/index";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import "aos/dist/aos.css";
import { NextSeo } from "next-seo";



function Layout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <NextSeo
        //50-60char
        title="Trident Digital Agency"
        description="TA team whose experience is as sharp as a trident. If you want to build quality software then trident is the best place. Quality is our best priority"
        canonical="https://www.teamtrident.co/"
        openGraph={{
          url: "https://www.teamtrident.co/",
          title: "Trident Digital Agency",
          description: "TA team whose experience is as sharp as a trident. If you want to build quality software then trident is the best place. Quality is our best priority",
          images: [
            {
              url: "",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "" },
            { url: "" },
          ],
          site_name: "Trident Digital Agency",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center bg-[#F6F5F4]">
          <ClipLoader color={"#1585ED"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="container mx-auto sm:max-w-7xl px-4 md:px-6">
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
}
export default Layout;
