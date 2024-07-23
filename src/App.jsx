import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";
import About from "./Views/About";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} /> 
				<Route path="/about" element={<About/>} /> 
			</Routes>
		</>
	);
}

export default App;

