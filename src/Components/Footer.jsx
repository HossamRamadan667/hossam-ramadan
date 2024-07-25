import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<h2 className="sectionTitle left">contact</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis commodi libero eaque
							exercitationem rem totam et, dignissimos ducimus dolorem quo dolore eum dolores maxime a
							quisquam, voluptatem corrupti maiores assumenda?
						</p>
					</div>
					<div className="col-12 col-md-6 col-lg-4 d-flex  justify-content-evenly flex-column">
						<div>
							<h5>Email:</h5>
							<p>HossamRamadan6677@gmail.com</p>
						</div>
						<div>
							<h5>Phone:</h5>
							<p>01009441184</p>
						</div>
						<div>
							<h5>Whatsapp:</h5>
							<p>01148183794</p>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<h3>follow me:</h3>
						<div className="social d-flex gap-4 mt-4">
							<Link to="https://www.facebook.com/hossamramadan667" target="_blank">
								<i class="fa-brands fa-facebook"></i>
							</Link>

							<Link to="https://www.instagram.com/HossamRamadan667" target="_blank">
								<i class="fa-brands fa-instagram"></i>
							</Link>

							<Link to="https://www.github.com/HossamRamadan667" target="_blank">
								<i class="fa-brands fa-github"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

