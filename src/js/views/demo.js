import React, { useState, useEffect,} from "react";
import { Link } from "react-router-dom";

export const Demo = () => {
	
	const [result, setResult] = useState({});

	useEffect(() => {

		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};
	  
		fetch("https://swapi.dev/api/planets/", requestOptions)
		.then(response => response.json())
		.then(result => setResult(result))
		.catch(error => console.log('error', error));
		//console.log(result);
	}, []);

	return (
		<div className="container">
			{result.results?.map((planet, index) => {
				return (
					<>
						<h1>{planet.name}</h1>
						<Link to={"/viewDetails/"+(index+1)}>Ir a Planeta</Link>
						//<img src={"https://starwars-visualguide.com/assets/img/characters/"+(index+1)+".jpg"}/>
					</>
				)}
			)}			
		</div>	
		
	);
};
