import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Card} from "../component/card";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => (
	<>
		<Characters/>
		<Planets/>
		<Vehicles/>
	</>
);
