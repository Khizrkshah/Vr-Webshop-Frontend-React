import { useEffect, useState, useRef } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/homepagestyle.css";

export function Login() {
  const navigate = useNavigate();
  const isLoggedIn = useRef(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  function loginCheck(data) {
    fetch("http://192.168.0.128:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        return data == true ? loginTrue() : loginFalse();
      });
  }

  function loginTrue() {
    isLoggedIn.current = true;
    console.log(isLoggedIn);
    navigate("/home");
  }
  function loginFalse() {
    setShowError(true);
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

  return (
    <div className="App">
      <div className="loginimg">
        <img className="loginimg" src="/images/icon.png" width="300"></img>
      </div>
      <div className="loginimg">
        <h4>Welcome to Kai's VR Store!</h4>
      </div>
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

        {showError && ( // render popup if showError state is true
          <div className="popup">
            <p>Email or password is incorrect.</p>
            <button onClick={() => setShowError(false)}>Close</button>
          </div>
        )}
      </div>
      <hr />
      <footer className="footer">
        <div className="constraint">Mian Khizr Shah &copy; 2023</div>
      </footer>
    </div>
  );
}
