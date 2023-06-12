import { useState } from "react";
import LoginPage from "./LoginPage";
import "./App.css";
import WardForm from "./WardForm";
import MunicipalityForm from "./MunicipalityForm";
import CustomerForm from "./CustomerForm";

function App() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    isRemembered: false,
  });

  const [wardData, setWardData] = useState({
    description: "",
    number: 0,
    address: "",
    contact_no: 0,
    email: "",
    population: 0,
    chief_first_name_en: "",
    chief_middle_name_en: "",
    chief_last_name_en: "",
    chief_first_name_np: "",
    chief_middle_name_np: "",
    chief_last_name_np: "",
    profile_img: null,
    bg_img: null,
    municipality: "",
    created_date: "",
    updated_date: "",
  });

  const [municipalityData, setMunicipalityData] = useState({
    name_en: "",
    name_np: "",
    municipality_type: "",
    population: 0,
    annual_income: 0,
    website: "",
    mayor_first_name_en: "",
    mayor_last_name_en: "",
    mayor_middle_name_en: "",
    mayor_first_name_np: "",
    mayor_last_name_np: "",
    mayor_middle_name_np: "",
    mayor_phone: 0,
    deputy_mayor_first_name_en: "",
    deputy_mayor_last_name_en: "",
    deputy_mayor_middle_name_en: "",
    deputy_mayor_first_name_np: "",
    deputy_mayor_last_name_np: "",
    deputy_mayor_middle_name_np: "",
    deputy_mayor_phone: 0,
    CAO_first_name_en: "",
    CAO_middle_name_en: "",
    CAO_last_name_en: "",
    CAO_first_name_np: "",
    CAO_middle_name_np: "",
    CAO_last_name_np: "",
    CAO_phone: 0,
    total_ward_no: 0,
    total_area: 0,
    contact_no: 0,
    email: "",
    district: "",
    created_date: "",
    updated_date: "",
  });

  const [customerData, setCustomerData] = useState({
    username: "",
    email: "",
    phone_no: 0,
    first_name_en: "",
    middle_name_en: "",
    last_name_en: "",
    first_name_np: "",
    middle_name_np: "",
    last_name_np: "",
    post: "",
    role: "",
    gender: "",
    ward_no: "",
    municipality_name: "",
    updated_date: "",
  });

  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setLoginData((prevloginData) => ({
      ...prevloginData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit() {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(loginData.email)) {
      setErrorMessage("! Email not valid");
    }
  }

  return (
    <div>
      {/* <LoginPage
        toggle={handleChange}
        hangleForm={handleSubmit}
      /> */}
      <CustomerForm toggle={handleChange} hangleForm={handleSubmit} />

      {/* <WardForm 
        toggle={handleChange}
        hangleForm={handleSubmit}
      />
      <MunicipalityForm 
        toggle={handleChange}
        hangleForm={handleSubmit}
      /> */}
    </div>
  );
}
export default App;
