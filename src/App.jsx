import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserStore } from "./stores/UserStore";
import React from "react";

export const UserContext = React.createContext();

const ProtectedRoute = ({ component: Component, userStore, ...rest }) => {
  if (!userStore.isLoggedIn && !localStorage.getItem("isLoggedIn")) {
    return <Navigate to="/" replace />;
  }

  return <Component {...rest} />;
};

function App() {
  const userStore = new UserStore();
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userStore}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute component={Home} userStore={userStore} />
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute component={About} userStore={userStore} />
              }
            />
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
