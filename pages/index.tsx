import type { NextPage } from "next";
import FilledButton from "../components/common/button/FilledButton";
import GettingStarted from "../components/get-started";

// Index as home page
const Home: NextPage = () => {
  return (
    <>
      <GettingStarted />
      <h1 className="text-primaryDark">Welcome to tailwind</h1>
      <FilledButton onClick={() => {}}> Dark Varient Button</FilledButton>
    </>
  );
};

export default Home;
