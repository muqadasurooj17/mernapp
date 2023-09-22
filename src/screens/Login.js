import React, {useState}from 'react'

export default function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log( JSON.stringify({email: credentials.email, password: credentials.password }))
    const response = await fetch("http://localhost:5000/api/createuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

    });
    const json = await response.json()
    console.log(json);


    if (!json.success) {
      alert("Enter Valid Credentials")
      //save the auth toke to local storage and redirect
      //localStorage.setItem('token', json.authToken)
      //navigate("/login")

    }
    // else {
    //   alert("Enter Valid Credentials")
    // }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div>this is login page </div>
  )
}
