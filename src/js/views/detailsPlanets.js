import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../component/detailCard";

export const DetailsPlanets = () => {

    const params = useParams();
    const [result, setResult] = useState({})

    useEffect (() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/planets/"+params.idPlanet, requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
            console.log(result)
    }, [])

    return (
        <>
            <h1>Planet {result?.name}</h1>,
            <DetailCard
                detailImage={"https://starwars-visualguide.com/assets/img/planets/"+params.idPlanet+".jpg"}
                detailTitle={result?.name}
                detailText={
                    <>
                    <p>climate: {result?.climate}</p>
                    <p>diameter: {result?.diameter}</p>
                    <p>gravity: {result?.gravity}</p>
                    {/*<p>orbital_period: {result?.orbital_period}</p>
                     <p>population: {result?.population}</p>
                    <p>homeworld: {result?.homeworld}</p> */}
                    </>                    
                }
                
            />
        </>
    )
}