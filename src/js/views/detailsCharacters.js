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
        <>
            <DetailCard 
            detailImage={"https://starwars-visualguide.com/assets/img/characters/"+(params.idCharacter)+".jpg"}
            detailTitle={result?.name}
            detailText={
                <>          
                    <p>birth_year: {result?.birth_year}</p>
                    <p>gender: {result?.gender}</p>
                    <p>height: {result?.height}</p>
                    <p>mass: {result?.mass}</p>
                    <p>skin_color: {result?.skin_color}</p>
                    <p>homeworld: {result?.homeworld}</p>
                </>}
                detail1="Name"
                detail2="Birthday"
                detail3="Gender"
                detail4="Height"
                detail5="Skin"
                detail6="Eyes"
                detail7="Hair"
                name={result?.name}
                birthday={result?.birth_year} 
                gender={result?.gender}
                height={result?.height}
                skin_color={result?.skin_color}
                eyes_color={result?.eye_color}
                hair_color={result?.hair_color}
            />
        </> 
    )
}