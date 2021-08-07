import React from "react";
import {Link} from "react-router-dom";


function EditCard(){
    return (
        <div className="col-9 mx auto">
             <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        {/*link that redirects back to the home page*/}
                        <Link to="/">Home</Link>
                    </li>
                    {/*let users know that they are on the current page*/}
                    <li className="breadcrumb-item"> Deck's Name
                    </li>
                    <li className="breadcrumb-item">
                        Edit Card
                    </li>
                </ol>
            </nav>
            <div className="row pl-3 pb-2">
                <h1>Edit Card</h1>
            </div>
        </div>
    )
}

export default EditCard;