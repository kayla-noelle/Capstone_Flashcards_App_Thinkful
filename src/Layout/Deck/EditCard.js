import React, { useEffect,useState } from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {updateCard, readDeck, readCard } from "../../utils/api/index";
import CardForm from "./CardForm";

function EditCard(){
    const [deck, setDeck] =useState([]);
    const [card, editCard]=useState({front:"", back:"", deckId:""});
    const {deckId,cardId} =useParams();
    const history =useHistory();

    useEffect(()=>{
        const abortController = new AbortController()
        const cardInfo =async() => {
            const response = await readCard(cardId, abortController.signal)
            editCard(()=> response)
        }
        cardInfo()
        return () => abortController.abort()
    }, [cardId]);

    useEffect(()=> {
        const abortController =new AbortController()

        const deckInfo =async () => {
            const response = await readDeck(deckId, abortController.signal)
            setDeck(()=> response)
        }
        deckInfo()
        return () => abortController.abort()
    },[deckId]);

    const changeForm =({target})=>{
        editCard({...card,[target.name]:target.value})
    }

    const submitForm=async (event) => {
        event.preventDefault()
        await updateCard(card)
        history.push(`/decks/${deck.id}`)
    }
    return (
        <div className="col-9 mx auto">
             <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        {/*link that redirects back to the home page*/}
                        <Link to={"/"}>Home</Link>
                    </li>
                    {/*let users know that they are on the current page*/}
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                    </li>
                    <li className="breadcrumb-item">
                        Edit Card {cardId}
                    </li>
                </ol>
            </nav>
            <div className="row pl-3 pb-2">
                <h1>Edit Card</h1>
            </div>
            <CardForm 
                submitForm={submitForm} 
                changeForm={changeForm} 
                card={card} 
                deckId={deckId} />
        </div>
    )
}

export default EditCard;