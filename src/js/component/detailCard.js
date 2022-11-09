import React, {Component} from "react";
import {Link, useHistory} from "react-router-dom";

export const DetailCard = (props) =>{
    
    return (
        <>
           <div className="container text-center border-bottom border-danger text-white">
                <div className="card mb-3" style={{maxWidth: "700px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.detailImage} className="img-fluid rounded-start" alt="image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{props.detailTitle}</h1>
                                <p className="card-text">{props.detailText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-danger d-flex">
                <p><h5 className="m-5">{props.detail1}</h5><br/>
                <h6 className="text-white">{props.dDetail1}</h6>
                </p>
                <p><h5 className="m-5">{props.detail2}</h5><br/>
                <h6 className="text-white">{props.dDetail2}</h6>
                </p>
                <p><h5 className="m-5">{props.detail3}</h5><br/>
                <h6 className="text-white">{props.dDetail3}</h6>
                </p>
                <p><h5 className="m-5">{props.detail4}</h5><br/>
                <h6 className="text-white">{props.dDetail4}</h6>
                </p>
                <p><h5 className="m-5">{props.detail5}</h5><br/>
                <h6 className="text-white">{props.dDetail5}</h6>
                </p>
                <p><h5 className="m-5">{props.detail6}</h5><br/>
                <h6 className="text-white">{props.dDetail6}</h6>
                </p>
                <p><h5 className="m-5">{props.detail7}</h5><br/>
                <h6 className="text-white">{props.dDetail7}</h6>
                </p>                
            </div>
        </>
    );
}
