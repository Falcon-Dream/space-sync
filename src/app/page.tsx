import Home from "@components/sections/Home/Home";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <div className="next-page" data-aos="fade-up">
        <Home />
      </div>
    </>
  );
};

export default HomePage;
