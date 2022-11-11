import React from "react";

export const Modal = () => {



    return (
        <>
            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item text-white" href="#">Profile<button>🗑</button></a></li>
                        <li><a className="dropdown-item text-white" href="#">Accesibility</a></li>
                        <li><a className="dropdown-item text-white" href="#">Privacy</a></li>
                        
                    </ul>
                </div>
        </>
    )
}