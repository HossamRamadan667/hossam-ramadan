import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Services from "./Views/Services";
import About from "./Views/About";
import Home from "./Views/Home";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} /> 
				<Route path="/about" element={<About/>} /> 
				<Route path="/services" element={<Services/>} /> 
			</Routes>
		</>
	);
}

export default App;

