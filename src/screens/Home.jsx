import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carouesal from "../components/Carouesal";
import '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



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

//console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])
  //not giving dependency means on first render the mentioned function will call any how 

  return (
    <>
        <Navbar />
        <Carouesal/>
        <div className="container">
        <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat.length !== 0
            ? foodCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>

                  <hr id="hr-success" style={{ height: "4px", 
                  backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItem.length !==0
                  
                  ? foodItem.filter(
                    (items) => (items.CategoryName === data.CategoryName) && 
                    (items.name.toLowerCase()))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems}
                           options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <Footer />
    </div>
    </>
  )}

