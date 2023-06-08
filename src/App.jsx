import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isRemembered: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  console.log(formData);

  return (
    <div className="mt-56 ">
      <div className="ml-96 w-96 h-24 bg-blue-950 text-white">
        <div className="pt-5"><h1 className="text-2xl">Welcome to</h1><h6>Digital Palika</h6></div>
      </div>
      <form className="ml-96 w-96 h-60 bg-white border border-gray-300 p-4" >
       <label className="mr-72 text-green-500 bottom-1.5">Email</label>
        <br/>
        <input
          className= "mr-96z mb-2 w-80 h-10 border border-gray-500"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="mr-64  text-green-500">Password</label>
        <br/>
        <input
        className=" mr-96z mb-2 w-80 h-10 border border-gray-500"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br/>
        <input
          className="mr-1"
          id="okayToRemember"
          type="checkbox"
          name="isRemembered"
          onChange={handleChange}
          checked={formData.isRemembered}
        />
        <label className="mr-24">Remember me</label>
        <label>Forgot Password?</label>
        <br/>
        <button className="mt-3 bg-green-500 w-80 h-9">Login</button>
      </form>
    </div>
  );
}

export default App;
