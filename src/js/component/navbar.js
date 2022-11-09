import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal";

export const Navbar = () => {
	return (
		<>
			<div className="container">
				<nav className="navbar navbar-light bg-light mb-3">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img src="../img/logo_negro.jpg"/></span>
					</Link>
					<div className="ml-auto">
						<Modal/>
					</div>
				</nav>
			</div>
		</>
	);
};
