import React from "react";
import {Link} from "react-router-dom";
//import {readDeck} from "../../utils/api/index";

function EditDeck(){
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
                <form>
                    <div class="form-group">
                        <h1>Edit Deck</h1>
                        <label for="name">Name</label>
                        <input type="name" class="form-control" id="name" aria-describedby="nameHelp"/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <Link to="/" className="btn btn-secondary mr-3">Cancel</Link>
                <button className="btn btn-primary">Submit</button>
            </div>
        )
}





export default EditDeck;