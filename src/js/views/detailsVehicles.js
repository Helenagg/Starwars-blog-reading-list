import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../component/detailCard";

export const DetailsVehicles = () => {

    const params = useParams();
    const [result, setResult] = useState();

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/vehicles/"+(params.idVehicles+4), requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
            console.log(result);

    }, [])



    return (
        <h1>Vehicles {result?.name}</h1>,
        <DetailCard
        detailImage={"https://starwars-visualguide.com/assets/img/vehicles/"+(params.idVehicles+4)+".jpg"}
        detailTitle={result?.name}
        detailText={
            <>
                <p>{result?.name} it is a vehicle of the model {result?.model}, with a load capacity {result?.cargo_capacity} and consumables in {result?.consumables}.</p>
                <p>It has capacity for a crew of {result?.crew} and {result?.passengers} passengers.</p>
                <p>It was manufactured by {result?.manufacturer}</p>
            </>
        }
        detail1="Name"
        dDetail1={result?.name}
        detail2="Model"
        dDetail2={result?.model} 
        detail3="Cost"
        dDetail3={result?.cost_in_credits}
        detail4="length"
        dDetail4={result?.length}
        detail5="Crew"
        dDetail5={result?.crew}
        detail6="Manufacturer"
        dDetail6={result?.manufacturer}
        detail7="Consumables"
        dDetail7={result?.consumables}
        />
    )
}