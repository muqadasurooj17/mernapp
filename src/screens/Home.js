import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carouesal from "../components/Carouesal";
import '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';



export default function Home() {

  const [foodCat,setFoodCat]=useState([]);
  const [foodItem,setFoodItem]=useState([]);


  const loadData=async()=>{
    let response=await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    })
    response=await response.json();
  
    setFoodItem(response[0])
    setFoodCat(response[1])

console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])

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
