import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const Characters = () => {

    const { store, actions } = useContext(Context);

    const [result, setResult] = useState({});
    useEffect (() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/people/", requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
            console.log(result)
    }, [])

    return (
        <>
            <div className="col-12 text-center border-bottom border-danger">
                <h1 className="text-danger">Characters</h1>
            </div>
            <div className="container text-center d-flex mt-5" style={{overflow: "auto"}}>                
                {result.results?.map((character,index) => {
                    return (            
                        <Card 
                            cardImage={"https://starwars-visualguide.com/assets/img/characters/"+(index+1)+".jpg"}
                            cardTitle={character.name}
                            cardText={
                                <>
                                <p>{character.name} is a character from Star Wards. Born this year {character.birth_year}. His height is {character.height} and his mass is {character.mass}.</p>
                                </>
                            }
                            url={"/detailsCharacters/"+(index+1)}
                            // cardButton={onClick=() => actions.addFavorite(
                            //     {
                            //         title: "Third",
                            //         background: "white",
                            //         initial: "white"
                            //     }
                            // )}
                        />
                    
                        
                    )
                })}                  
            </div>
        </>
        
    )
}