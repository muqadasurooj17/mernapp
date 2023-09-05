import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carouesal from "../components/Carouesal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Carouesal/>
   <Card/>
        <Footer />
      </div>
    </div>
  );
}
