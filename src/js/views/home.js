import React, { useContext } from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {

	return (
		<>
			<div>
			<Characters/>
			<Planets/>
			<Vehicles/>
			</div>
		</>
	)
};
