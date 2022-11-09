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
            <DetailCard
                detailImage={"https://starwars-visualguide.com/assets/img/planets/"+params.idPlanet+".jpg"}
                detailTitle={result?.name}
                detailText={
                    <>
                    <p>{result?.name} is a planet in which {result?.population} inhabitants live, with a climate {result?.climate} and terrain {result?.terrain}, whose diameter is {result?.diameter}.</p>
                    <p>It has a constant gravity of {result?.gravity}. An orbital period of {result?.orbital_period} and a rotational period of {result?.rotation_period}</p>
                    </>                    
                }
                detail1="Name"
                dDetail1={result?.name}
                detail2="Climate"
                dDetail2={result?.climate}
                detail3="Terrain"
                dDetail3={result?.terrain}
                detail4="Gravity"
                dDetail4={result?.gravity}
                detail5="Population"
                dDetail5={result?.population}
                detail6="Diameter"
                dDetail6={result?.diameter}
                detail7="Water"
                dDetail7={result?.surface_water}
            />
        </>
    )
}