import { ReactNode, useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer/index";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import "aos/dist/aos.css";

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
