import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal";
import logo from "../../img/logo_negro.jpg";

export const Navbar = () => {
	return (
		<>
			<div className="container">
				<nav className="navbar navbar-dark bg-dark mb-3">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img src={logo} style={{height: "3rem"}}/></span>
					</Link>
					<div className="ml-auto">
						<Modal/>
					</div>
				</nav>
			</div>
		</>
	);
};
