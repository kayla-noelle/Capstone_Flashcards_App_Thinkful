import React, {useState, useEffect} from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api/index";


function Deck(){
 const {deckId} = useParams();
 const [deck, setDeck] =useState([]);
 const {url} = useRouteMatch();
 const {id, name, description, cards} = deck;
 
 useEffect(() => {
    const abortController = new AbortController()
    const deckInfo = async () => {
        const response = await readDeck(deckId, abortController.signal)
        setDeck(() => response)
    }
    deckInfo()
    return () => abortController.abort()
}, [deckId]);

     const deleteHandle= ()=>{
        if(window.confirm("Are you sure you want to delete this deck? You will not be able to recover it.")){
            deleteDeck(id);
        }
    }

return (
    <div>
        <nav>
            <ol className="breadcrumb">
                 {/*link that redirects back to the home page*/}
                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                <li className="breadcrumb-item">Name</li>
            </ol>
        </nav>
        {/* a container holding the card deck, including their name,
                description, a button to study it, a button to edit it, a 
                button to add cards to the deck, and a button to delete it */}

        <div className="card border-0 mb-4">
            <div className="card-body">
                <div>
                    {/*deck name*/}
                    <h5>{name}</h5>
                </div>
                {/*deck description*/}
                <p>{description}</p>
                <div className="row px-3">
                    {/*edit button*/}
                    <Link to={`/decks/${id}/edit`} className="btn btn-secondary mr-3">Edit</Link>
                     {/*study button*/}
                    <Link to={`/decks/${id}/study`} className="btn btn-primary mr-3">Study</Link>
                     {/*add button*/}
                     <Link to={`/decks/${id}cards/new`} className="btn btn-primary mr-3">Add Cards</Link>
                     {/*delete button*/}
                     <button onClick={deleteHandle} value={id} name="delete" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
        <div className="row pl-3 pb-2">
            <h1>Cards</h1>
        </div>
        <div className="row card-body"></div>
        <div className="d-flex justify-content-end p-4">
        <Link to="/decks/:deckId/cards/:cardId/edit" className="btn btn-secondary">Edit</Link>
            <button className="btn btn-danger">Delete</button>
        </div>
    </div>
)

}

export default Deck;