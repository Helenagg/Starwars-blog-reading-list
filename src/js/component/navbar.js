import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal";
import logo from "../../img/logo_negro.jpg";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const {store, actions} = useContext(Context);

	const deleteFav = (favorite, index) => {
		arrFav.filter((element) => element!== index)
	}
	
	return (
		<>
			<div className="container">
				<nav className="navbar navbar-dark bg-dark mb-3">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img src={logo} style={{height: "3rem"}}/></span>
					</Link>
					<div className="ml-auto">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu">
								{store.arrFav.map((favorite, index) => <li className="text-white">{favorite}<button onClick={() => deteleFav(favorite, index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash text-white" viewBox="0 0 16 16">
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
								<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
								</svg></button></li>)}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};
