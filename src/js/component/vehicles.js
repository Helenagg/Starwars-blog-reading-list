import React, { useEffect, useState } from "react";
import { Card } from "./card";

export const Vehicles = () => {

    const [result, setResult] = useState({})

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/vehicles/", requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
            console.log(result);
    }, [])

    return (
        <>
            <div className="container text-center d-flex mt-5">
                    <h1 className="text-danger">Vehicles</h1>
                    {result.results?.map((vehicles, index) =>{
                        return (
                            <Card
                                cardImage={"https://starwars-visualguide.com/assets/img/vehicles/"+(index+4)+".jpg"}
                                cardTitle={vehicles.name}
                                cardText={
                                    <>
                                        <p>{vehicles.name} it is a vehicle classified as {vehicles.model} and created by {vehicles.manufacturer}</p>
                                    </>
                                }
                                url={"/detailsVehicles/"+(index+1)}
                            />
                        )
                    })}
            </div>
        </>        
    )
}