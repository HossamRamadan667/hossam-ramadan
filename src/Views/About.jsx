import aboutImg from "../images/about-img.png";
function About() {
	return (
		<section className="about">
			<h2 className="sectionTitle center">About</h2>
			<div className="container">
				<div className="row  gap-3 ">
					<div className="col-12 col-md-3 mb-3 mb-md-0">
						<div className="aboutImage">
							<img src={aboutImg} alt="keyboard" />
						</div>
					</div>
					<div className="col-12 col-md-8">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ad neque soluta aspernatur
							illum, fuga asperiores blanditiis praesentium autem tenetur nihil fugiat impedit error
							magnam quam, laboriosam velit, beatae placeat.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

