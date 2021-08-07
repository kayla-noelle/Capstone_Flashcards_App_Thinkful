import React, {useState} from "react";
import {Link, useHistory,} from "react-router-dom";
import { createDeck } from "../../utils/api";

function CreateDeck(){
    const history =useHistory();
    const [newDeck, setNewDeck] = useState({name:"", description:""})

    const handleChange=({target})=>{
        setNewDeck({...newDeck,[target.name]:target.value})
    }

    const handleSubmit= async (event) =>{
        event.preventDefault()
        const response = await createDeck(newDeck);
        history.push(`/deck/${response.id}`);
    }
    return (
   
        <div className="col-9 mx-auto">
            {/*Navigation Bar */}
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        {/*link that redirects back to the home page*/}
                        <Link to="/">Home</Link>
                    </li>
                    {/*let users know that they are on the current page*/}
                    <li className="breadcrumb-item"> Create Deck
                    </li>
                </ol>
            </nav>
            {/*form for creating a new deck*/}
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <h1>Create Deck</h1>
                    <label for="name">Name</label>
                    <input type="name" 
                    class="form-control" 
                    id="name" 
                    aria-describedby="nameHelp" 
                    placeholder="Deck Name"
                    onChange={handleChange}
                    value={newDeck.name}
                    />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea 
                    class="form-control" 
                    id="description" 
                    rows="3" 
                    placeholder="Brief description of the deck"
                    onChange={handleChange}
                    value={newDeck.description}
                    ></textarea>
                </div>
            </form>
            <Link to="/" className="btn btn-secondary mr-3">Cancel</Link>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    
    )
}

export default CreateDeck;