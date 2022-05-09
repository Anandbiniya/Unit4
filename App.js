import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Routes, Route,useNavigate, } from "react-router-dom";
import SignIn from "./components/Signin";
import Product from "./components/Product";
import SignUp from "./components/Signup";




function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="Product" element={<Product />} />
        <Route path="home" element={<Home />} />
        <Route path="login/*" element={<Login />}></Route>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
