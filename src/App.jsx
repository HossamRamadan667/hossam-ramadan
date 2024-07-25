import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Services from "./Views/Services";
import Works from "./Views/Works";
import About from "./Views/About";
import Home from "./Views/Home";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/portfolio" element={<Works />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;

