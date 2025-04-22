import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="text-center p-8 uppercase text-xl">
    <h1 className="text-4xl font-bold mb-4">🌍 Welcome to Country Info</h1>
    <p className="mb-4">Explore information about countries.</p>
    <Link to="/countries" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg">
      Browse Countries
    </Link>
  </div>
);

export default Home;