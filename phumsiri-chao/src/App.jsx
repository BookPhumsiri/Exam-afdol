import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router";

import Home from "./pages/Home";
import Calculate from "./pages/Caculate";
import FetchApi from "./pages/FetchApi";
import NotFound from "./pages/NotFound";

function App() {
  const [sellingPrice, setSellingPrice] = useState([]);
  const [constPrice, setConstPrice] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <div style={{ padding: "0px", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ marginBottom: "0px" }}>
        <Link to="/" style={{ marginRight: 0 }}>
          Home
        </Link>
        <Link to="/calculate" style={{ marginRight: 0 }}>
          Calculate
        </Link>
        <Link to="/fetchapi">FetchApi</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/fetchapi" element={<FetchApi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
