import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg my-2">
				<div className="container flex-row-reverse">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="" width={50} height={50} />
					</Link>

					<button
						className="navbar-toggler collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<i class="fa-solid fa-bars fa-2x"></i>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link " aria-current="page" to="/">
									Home
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/about">
									About
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/services">
									Services
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/portfolio">
									Portfolio
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/contact">
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;

