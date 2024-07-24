import Hero from "../Components/Hero.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Works from "./Works.jsx";

function Home() {
	return (
		<>
			<Hero />
			<About></About>
			<Services />
			<Works />
		</>
	);
}

export default Home;

