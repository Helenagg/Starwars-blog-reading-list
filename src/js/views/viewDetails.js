import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewDetails = () => {

    const params = useParams();

    const [result, setResult] = useState({})
    
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/planets/"+params.idPlanet, requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));

    })

    return (
    <h1>Planeta {result?.name}</h1>
    )
};