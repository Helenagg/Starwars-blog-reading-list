import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailCard } from "../component/detailCard";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
			<DetailCard urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
