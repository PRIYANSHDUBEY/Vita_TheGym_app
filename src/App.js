import React from 'react-router-dom';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/style.css';
import Home from './pages/Home';
import '../src/assets/css/media.css';
import BarPage from './pages/BarPage';
import ContactPage from './pages/ContactPage';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/bar" element={<BarPage />} />
				<Route path="/contact" element={<ContactPage />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
