import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<div>home</div>} /> 
			</Routes>
		</>
	);
}

export default App;

