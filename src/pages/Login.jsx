import { useEffect, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/homepagestyle.css";

export function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const data = { email: "a password: "alexsan123" };

  function loginCheck(data) {
    fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        //navigate("/home");
        return data == true ? navigate("/home") : navigate("/error-login");
      });
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    const data = { email, password };
    loginCheck(data);
  };

  /*useEffect(() => {
    fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        //data == true ? Navigate("/home") : Navigate("/error-login");
      });
  }, []);*/

  return (
    <div className="App">
      <div className="login">
        <label>
          <b>Email</b>
        </label>
        <input
          type="text"
          id="Email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
          value={email}
        ></input>

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          id="pword"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          value={password}
        ></input>

        <button onClick={handleClick}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
}
