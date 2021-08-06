import React from "react";
import CardList from './CardList';

function Study(){
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Study
                    </li>
                </ol>
            </nav>
            <div>
                <h1>Study</h1>
            </div>
            <CardList/>
        </div>
    )
}



export default Study;