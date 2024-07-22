import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} /> 
			</Routes>
		</>
	);
}

export default App;

