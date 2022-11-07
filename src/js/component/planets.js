import React, { useEffect, useState } from "react";

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
                   return (<p>{planet.name}</p>
                    
                   )
                })}
            </div>
        </>
    )
}