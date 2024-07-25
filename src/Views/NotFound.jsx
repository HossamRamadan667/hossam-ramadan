import { useEffect } from "react";

function NotFound() {
	useEffect(() => {
		[document.getElementsByTagName("header")[0], document.getElementsByTagName("footer")[0]].forEach((el) => {
			el.style.display = "none";
			console.log("hey?");
		});
	}, []);

	const onload = () => {};
	return (
		<section onLoad={onload()}>
			<div className="container vh-100 d-flex align-items-center justify-content-center">
				<h2 className="text-center">
					404
					<br />
					page Not found
				</h2>
			</div>
		</section>
	);
}

export default NotFound;

