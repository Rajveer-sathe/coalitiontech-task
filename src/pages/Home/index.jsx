import React from "react";
import Header from "../../components/Nav";
import MainComp from "../../components/Main";
import "./index.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <MainComp />
    </div>
  );
}

export default Home;
