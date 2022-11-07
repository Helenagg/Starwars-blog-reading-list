import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../component/detailCard";

export const DetailsCharacters = () => {

    const params = useParams();
    const [result, setResult] = useState({})

    useEffect (() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/people/"+params.idCharacter, requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
            console.log(result)
            
    }, [])

    return (
        <h1>Character {result?.name}</h1>
    )
}