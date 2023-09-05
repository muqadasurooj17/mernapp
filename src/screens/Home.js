import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carouesal from "../components/Carouesal";
import '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';



export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Carouesal/>
        <div className="m-5">
        <Card/>
        </div>
   
        <Footer />
      </div>
    </div>
  );
}
