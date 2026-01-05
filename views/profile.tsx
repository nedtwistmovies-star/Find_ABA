import React from "react";
import { APP_NAME } from "../constants";

const Home: React.FC = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <p>
        The elite city operating system connecting Aba’s artisans,
        businesses, and logistics to the global economy.
      </p>
    </div>
  );
};

export default Home;
