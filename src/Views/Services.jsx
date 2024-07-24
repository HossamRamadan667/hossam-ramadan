import bootstrap from "../images/icons/Bootstrap.svg";
import github from "../images/icons/github.svg";
import react from "../images/icons/react.svg";

const sectionData = [
	{
		icon: bootstrap,
		title: "bootstrap",
		description: "this is a long description about coding",
	},
	{
		icon: react,
		title: "react",
		description: "this is a long description about coding",
	},
	{
		icon: github,
		title: "github",
		description: "this is a long description about coding",
	},
];

function Service(props) {
	return (
		<div className="service d-flex flex-column gap-3">
			<div className="serviceIcon">
				<img src={props.data.icon} alt="" />
			</div>
			<h3>{props.data.title}</h3>
			<p>{props.data.description}asd</p>
		</div>
	);
}

function Services() {
	return (
		<section className="services">
			<h2 className="sectionTitle center">services</h2>
			<div className="container">
				<div className="row">
					{sectionData.map((el,i) => (
						<div className="col-12 col-md-6 col-lg-4 mb-3" key={`service-${i}`}>
							<Service data={el} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;

