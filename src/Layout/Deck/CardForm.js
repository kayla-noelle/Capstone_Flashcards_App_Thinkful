import React from "react";
import {Link} from "react-router-dom";

function CardForm({submitForm, changeForm, card, deckId}){
    return (
        <form>
            <div>
                <label>Front</label>
                <textarea
                name="front"
                value={CardForm.front}
                onChange ={changeForm}
                id="front"
                className="form-control"
                placeholder="Front side of card"
                rows="4"
                />
            </div>
            <div>
                <label>Back</label>
                <textarea
                name="back"
                value={card.back}
                onChange={changeForm}
                className="form-control"
                id="back"
                placeholder="Back side of card"
                rows="4"
                />
            </div>
            <Link
            to={`/decks/${deckId}`}
            name="cancel"
            className="btn btn-secondary mr-3">
                Done
            </Link>
            <button
            type="submit"
            className="btn btn-primary"
            ></button>
        </form>
    )
}

export default CardForm;
