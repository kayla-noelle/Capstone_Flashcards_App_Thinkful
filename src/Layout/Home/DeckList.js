import React from "react";
import { Link } from "react-router-dom";
import {deleteDeck} from "../../utils/api/index";

function DeckList({deck}){
     //const {id, name, description, cards} = deck;
     //const deckLength = cards.length;

     const deleteHandle= (id)=>{
         if(window.confirm("Are you sure you want to delete this deck? You will not be able to recover it.")){
             deleteDeck(id);
         }
     }

    return (
        <div className="card w-75 mb-4">
            <div className ="card-body">
                <div className="row px-3">
                    <h5 className="card-title">name</h5>
                    <p className="ml-auto">  cards</p>
                </div>
                    <p className="card-text">Description</p>
                    <div className="row px-3">
                       <Link to="/" className="btn btn-secondary ">View</Link>
                        <Link to="/decks/:deckId/study" className="btn btn-primary ml-3">Study</Link>
                        <button onClick={deleteHandle} name="delete"  className="btn btn-danger ml-auto">Delete</button>
                    </div>
            </div>
        </div>
    )
}





 export default DeckList;