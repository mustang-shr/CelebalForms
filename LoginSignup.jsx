import React, { useState } from 'react'
import './LoginSignup.css'

const countriesWithCities = {
  "United States": ["New York", "Los Angeles", "Chicago"],
  "Canada": ["Toronto", "Vancouver", "Montreal"],
  "United Kingdom": ["London", "Manchester", "Birmingham"],
  "Australia": ["Sydney", "Melbourne", "Brisbane"],
  "Germany": ["Berlin", "Munich", "Frankfurt"],
  "France": ["Paris", "Lyon", "Marseille"],
  "India": ["Mumbai", "Delhi", "Bangalore"],
  "China": ["Beijing", "Shanghai", "Shenzhen"],
  "Japan": ["Tokyo", "Osaka", "Kyoto"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília"]
};

const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCities(countriesWithCities[country] || []);
    setSelectedCity(''); // Reset city selection when country changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">
            {action}
        </div>
        <div className="underline">

        </div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <input type="firstname" placeholder="FirstName"/>
        </div>}
      </div>
        

      <div className="inputs">
        <div className="input">
            <input type="lastname" placeholder="LastName"/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
            <input type="username" placeholder="UserName" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
            <input type="email" placeholder="Email Id" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
            <input type="password" placeholder="Password"/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
            <input type="phone" placeholder="Phone"/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {Object.keys(countriesWithCities).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <select value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>


      <div className="inputs">
        <div className="input">
            <input type="aadhar" placeholder="Aadhaar"/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
            <input type="pan" placeholder="Pan"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Lost Password ? <span>Click Here</span>
    </div>}
    

    <div className="submit-container">
        <div className={action==="Sign Up"?"submit gray" : "submit"}
        onClick={()=>{
          setAction("Sign Up")
        }}
        >
            Sign Up
        </div>
        <div className={action==="Login"?"submit gray" : "submit"}
        onClick={()=>{
          setAction("Log In")
        }}
        >
            Log In
        </div>
    </div>
    </div>
  )
}

export default LoginSignup
