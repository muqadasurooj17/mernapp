import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Card(props) {
  let options = props.options;
let priceOptions = Object.keys(options);
let foodItem = props.item;

  return (
    <div>
  
    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." 
        style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">


          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "38px" }}>

            <select className="m-2 h-100 w-20 bg-success text-black rounded" 
            style={{ select: "#FF0000" }} >
{/*             
            //onClick={handleClick} onChange={handleQty}> */}
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" 
            style={{ select: "#FF0000" }} 
            // ref={priceRef} 
            // onClick={handleClick} onChange={handleOptions}
            >
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            {/* <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              ₹{finalPrice}/-
            </div> */}
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} 
          // onClick={handleAddToCart}
          >
            Add to Cart</button>

          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
)}
