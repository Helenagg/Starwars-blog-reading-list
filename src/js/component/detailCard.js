import React, {Component} from "react";
import {Link, useHistory} from "react-router-dom";

export const DetailCard = (props) =>{
    const navigate = useHistory();
    return (
        <>
           <div className="container text-center border-bottom border-danger">
                <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.urlImage} className="img-fluid rounded-start" alt="image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.cardTitle}</h5>
                                <p className="card-text">{props.cardText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-danger d-flex">
                <h6 className="m-5">Name</h6>
                <h6 className="m-5">Birthday</h6>
                <h6 className="m-5">Gender</h6>
                <h6 className="m-5">Height</h6>
                <h6 className="m-5">Skin Color</h6>
                <h6 className="m-5">Eyes Color</h6>
            </div>
        </>
    );
}
