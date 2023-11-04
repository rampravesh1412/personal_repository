import React from "react";
import Home from "./components/Home/Home";
import Page from "./components/Page/Page";
import Something from "./components/Something/Something";
import Notfound from "./components/Notfound/Notfound";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <nav className="nav-wrapper">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page">Page</Link>
          </li>
          <li>
            <Link to="/Something">Something</Link>
          </li>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Something" element={<Something />} />
        <Route path="*" element={<Notfound />} />
        
      </Routes>
    </div>
  );
};

export default App;
