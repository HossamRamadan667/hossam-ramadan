import githubIco from "../images/icons/github.svg";
import work1 from "../images/project-1.jpg";
import work2 from "../images/project-2.jpg";
import { Link } from "react-router-dom";

const sectionData = [
	{
		image: work1,
		links: {
			website: "",
			repo: "https://github.com/HossamRamadan667/inance",
		},
	},
	{
		image: work2,
		links: {
			website: "",
			repo: "https://github.com/HossamRamadan667/energym",
		},
	},
];

function Work(props) {
	return (
		<div className="work">
			<div className="img">
				<img src={props.data.image} alt="" className="w-100 h-100" />
			</div>
			<div className="links">
				<div className="link repo">
					<Link to={props.data.links.repo} target="_blank">
						<img src={githubIco} alt="github" className="w-100 h-100" />
					</Link>
				</div>
				<div className="link site">
					<Link to={props.data.links.website} target="_blank">
						<i class="fa-solid fa-eye"></i>
					</Link>
				</div>
			</div>
		</div>
	);
}

function Works() {
	return (
		<section className="works">
			<h2 className="sectionTitle center">Portfolio</h2>
			<div className="container">
				<div className="row">
					{sectionData.map((el, i) => (
						<div className="col-12 col-md-6 col-lg-4 mb-3" key={`work-${i}`}>
							<Work data={el} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Works;

