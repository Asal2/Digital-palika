import { useState } from "react";
import LoginPage from "./LoginPage"
import "./App.css";


function App() {
  const[email, setEmail] = useState([])
  const[password, setPassword]= useState([])
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isRemembered: false,
  });

  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(){
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailPattern.test(formData.email)){
      setErrorMessage("! Email not valid")
    }
  }
  
  return (
    <div>
      <LoginPage
        toggle={handleChange}
        hangleForm={handleSubmit}
      />
    </div>
  );
}

export default App;
