import React, { useEffect, useState } from "react";
import { Card } from "./card";
import { Link } from "react-router-dom";

export const Planets = () => {

    const [result, setResult] = useState({});

    useEffect (() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/planets/", requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
            console.log(result)
    }, [])

    return (
        <>
            <div className="container text-center d-flex mt-5">
                <h1 className="text-danger">Planets</h1>
                {result.results?.map((planet, index) => {
                   return (
                   <Card
                   cardImage={"https://starwars-visualguide.com/assets/img/planets/"+(index+2)+".jpg"}
                   cardTitle={planet.name}
                   cardText={
                        <>
                            <p>{planet.name} it is a planet with a type of climate {planet.climate} with a diameter of {planet.diameter} and an orbital period {planet.orbital_period}</p>
                        </>
                    }
                    url={"/detailsPlanets/"+(index+2)}
                   />
                   )
                })}
            </div>
        </>
    )
}