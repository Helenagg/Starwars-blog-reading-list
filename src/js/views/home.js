import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Card} from "../component/card";

export const Home = () => (
	<div className="container">
		<div className="text-center d-flex mt-5">
			<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
			<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
			<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
			<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
			<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>

		</div>
	</div>
);
