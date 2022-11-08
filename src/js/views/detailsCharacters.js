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
                dDetail1={result?.name}
                detail2="Birthday"
                dDetail2={result?.birth_year} 
                detail3="Gender"
                dDetail3={result?.gender}
                detail4="Height"
                dDetail4={result?.height}
                detail5="Skin"
                dDetail5={result?.skin_color}
                detail6="Eyes"
                dDetail6={result?.eye_color}
                detail7="Hair"
                dDetail7={result?.hair_color}
            />
        </> 
    )
}