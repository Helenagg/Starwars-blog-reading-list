import React from "react";

export const Modal = () => {



    return (
        <>
            <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Favorites
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog bg-white">
                    <div className="modal-content">
                        <div className="modal-header bg-white">
                            <h1 className="modal-title bg-white text-dark fs-5" id="exampleModalLabel">Favorites</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-white text-dark">
                            ...
                        </div>
                        <div className="modal-footer bg-white text-dark">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}