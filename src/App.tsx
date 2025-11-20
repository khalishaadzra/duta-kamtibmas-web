import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DetailBerita from "./DetailBerita";
import DetailEdukasi from "./DetailEdukasi"; // <--- Import ini

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
        {/* Tambahkan Route Edukasi di sini */}
        <Route path="/edukasi/:id" element={<DetailEdukasi />} />
      </Routes>
    </Router>
  );
}

export default App;
