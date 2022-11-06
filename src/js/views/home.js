import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Card} from "../component/card";
import { Characters } from "../component/characters";

export const Home = () => (
	<>
		<Characters/>
		<div className="container text-center d-flex mt-5">			
			<h1 className="text-danger">Characters</h1>	
			<div className="container text-center d-flex mt-5">
				<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
				
			</div>			
		</div>
		<div className="container text-center d-flex mt-5">
		<h1 className="text-danger">Planets</h1>
		<div className="container text-center d-flex mt-5">
				<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
				
			</div>
		</div>
		<div className="container text-center d-flex mt-5">
		<h1 className="text-danger">Vehicles</h1>
		<div className="container text-center d-flex mt-5">
				<Card urlImage="#" cardTitle="Ejemplo" cardText="Some quick example text to build on the card title and make up the bulk of the card's content."/>
				
			</div>
		</div>
	</>
);
