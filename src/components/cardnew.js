import React from 'react'

export default function Card() {
  return (
    <div>
     <div>
          <div className="card mt-3" style={{ width: "18rem", maxhieght: "360px" }}>
            <img src="https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?w=740&t=st=1693911956~exp=1693912556~hmac=6ba62fd8d6ffbf603ecf5b70cbd68b598d6faad4e9e4cc7e7e6d70055f7d6e3b"
             className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to</p>
              <div className="container w-100">
                <select className="m-2 h-100 bg-warning rounded">
                  {Array.from(Array(10), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <select className="m-2 h-100 bg-success rounded">
                  <option value="half">Half</option>
                  <option value="half">FULL</option>
                  <option value="half">MEDIUM</option>
                </select>

                <div className="d-inline h-100  fs-5">Total Price</div>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}
