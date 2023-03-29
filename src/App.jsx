import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserStore } from "./stores/UserStore";
import React from "react";

export const UserContext = React.createContext();

const ProtectedRoute = ({ isLoggedIn, redirectPath = "/" }) => {
  if (!isLoggedIn && !localStorage.getItem("isLoggedIn")) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function App() {
  const userStore = new UserStore();
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userStore}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route element={<ProtectedRoute userStore={userStore.isLoggedIn} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
      <footer className="footer">
        <div className="constraint">Mian Khizr Shah &copy; 2023</div>
      </footer>
    </div>
  );
}

export default App;
