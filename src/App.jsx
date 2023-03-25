import { useState } from "react";
import { useEffect } from "react";
import { Home } from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:8081/api/product", {
  //     // mode: "no-cors",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // }, []);

  return <Home />;
}

export default App;
