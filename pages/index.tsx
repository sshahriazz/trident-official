import type { NextPage } from "next";
import FilledButton from "../components/common/button/FilledButton";

// Index as home page
const Home: NextPage = () => {
  return <div>
    <h1 className="text-primaryDark">Welcome to tailwind</h1>
    <FilledButton onClick={() => { }}> Dark Varient Button</FilledButton>
  </div>
};

export default Home;
