import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/homepagestyle.css";

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function registerUser(data) {
    fetch("http://192.168.0.128:8081/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
      });
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password, address, firstName, lastName };
    registerUser(data);
  };

  return (
    <div className="App">
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            id="Email"
            placeholder="Enter Email"
            onChange={handleEmailChange}
            value={email}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            id="pword"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
            value={password}
          />

          <label>
            <b>Address</b>
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            onChange={handleAddressChange}
            value={address}
          />

          <label>
            <b>First Name</b>
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            onChange={handleFirstNameChange}
            value={firstName}
          />

          <label>
            <b>Last Name</b>
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
            onChange={handleLastNameChange}
            value={lastName}
          />

          <button type="submit">Register</button>
        </form>
      </div>
      <hr />
    </div>
  );
}
