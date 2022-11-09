import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<div className="container">
				<nav className="navbar navbar-light bg-light mb-3">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img src="../img/logo_negro.jpg"/></span>
					</Link>
					<div className="ml-auto">
						<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
						Favorites
						</button>
						<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									...
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="button" className="btn btn-primary">Save changes</button>
								</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};
