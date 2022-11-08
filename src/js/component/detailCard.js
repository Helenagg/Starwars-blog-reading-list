import React, {Component} from "react";
import {Link, useHistory} from "react-router-dom";

export const DetailCard = (props) =>{
    
    return (
        <>
           <div className="container text-center border-bottom border-danger">
                <div className="card mb-3" style={{maxWidth: "700px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.detailImage} className="img-fluid rounded-start" alt="image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.detailTitle}</h5>
                                <p className="card-text">{props.detailText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-danger d-flex">
                <p><h5 className="m-5">{props.detail1}</h5><br/>
                <h6 className="text-dark">{props.name}</h6>
                </p>
                <p><h5 className="m-5">{props.detail2}</h5><br/>
                <h6 className="text-dark">{props.birthday}</h6>
                </p>
                <p><h5 className="m-5">{props.detail3}</h5><br/>
                <h6 className="text-dark">{props.gender}</h6>
                </p>
                <p><h5 className="m-5">{props.detail4}</h5><br/>
                <h6 className="text-dark">{props.height}</h6>
                </p>
                <p><h5 className="m-5">{props.detail5}</h5><br/>
                <h6 className="text-dark">{props.skin_color}</h6>
                </p>
                <p><h5 className="m-5">{props.detail6}</h5><br/>
                <h6 className="text-dark">{props.eyes_color}</h6>
                </p>
                <p><h5 className="m-5">{props.detail7}</h5><br/>
                <h6 className="text-dark">{props.hair_color}</h6>
                </p>                
            </div>
        </>
    );
}
