import heroImg from "../images/heroImg.jpg"; 

function Hero() {
	return (
		<section className="hero">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 d-flex flex-column gap-2 align-items-start justify-content-start mb-3">
						<p>
							i'm <br /> hossam Ramadan
						</p>
						<h1>Front-end</h1>
						<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequuntur. Neque tenetur
							optio quibusdam voluptas minus ipsam veritatis debitis? 
						</p>
						<button className="button">Contact</button>
					</div>
					<div className="col-12  col-md-6 d-none  d-sm-block">
						<div className="img">
							<div className="bubble"> </div>
							<div className=" bubble bubble-filled"> </div>
							<div className="bubble"> </div>
							<img src={heroImg} alt="hossam" width={200} height={200} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;

