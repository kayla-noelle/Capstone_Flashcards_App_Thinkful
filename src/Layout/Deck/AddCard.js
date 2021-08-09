 import React, {useEffect, useState} from "react";
 import { Link, useParams } from "react-router-dom"
 import {createCard, readDeck } from "../../utils/api/index";
 import CardForm from "./CardForm";

 function AddCard(){
     const [deck, setDeck] =useState([])
     const [card, addCard] =useState( {front:"", back:"", deckId:""})
     const {deckId} =useParams()

     useEffect(() =>{
         const abortController = new AbortController()
        
         const deckInfo = async () => {
             const response = await readDeck(deckId, abortController.signal)
             setDeck(() => response)
         }
         deckInfo()
         return() => abortController.abort()
     }, [deckId])
     const handleChange=(event)=>{
        addCard({...card,[event.target.name]:event.target.value})
     }

     const handleSubmit= async (event) =>{
        event.preventDefault()
        addCard({...card, deckId:deckId})
        const response = await createCard(deckId,card);
        addCard({front: "", back: "", deckId: ""})
    }

    return (
        <div className="col-9 mx-auto">
           
            {/*navigation bar */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">

                    {/* a link to the home page */}
                    <li className="breadcrumb-item">
                        <Link to={"/"}>
                            <i className="fa fa-home" aria-hidden="true"></i>
                            Home
                        </Link>
                    </li>

                    {/* a link to the deck */}
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deckId}`}>
                            {deck.name}
                        </Link>
                    </li>

                    {/* a link for adding a card */}
                    <li className="breadcrumb-item">
                        Add Card
                        </li>

                </ol>
            </nav>


            <div className="row pl-3 pb-2">
                {/* a heading that display's the deck's name and "add card" */}
                <h1>{deck.name}: Add Card</h1>
            </div>
            <CardForm 
            submitForm={handleSubmit} 
            changeForm={handleChange} 
            card={card} 
            deckId={deckId} 
            />

        </div>
    )

 }
export default AddCard;