import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div className="text-lg uppercase">
        {/* Improved Nav */}
        <nav className="bg-gray-800 text-white p-6 flex justify-center space-x-10 text-xl shadow-md">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/countries" className="hover:underline">Countries</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>

        {/* Page Routing */}
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:name" element={<CountryDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
