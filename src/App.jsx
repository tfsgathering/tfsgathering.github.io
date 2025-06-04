import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Change from "./pages/Change";
import Join from "./pages/Join";


function App() {
	return (
		<div className="wrapper">
		<Router>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/rules" element={<Rules />} />
			<Route path="/change" element={<Change />} />
			<Route path="/join" element={<Join />} />
		</Routes>
		<Footer />
		</Router>
		</div>
	)
}

export default App
