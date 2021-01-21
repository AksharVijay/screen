import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ScreenFo.css';

export default class Screen extends Component {
    constructor(props){
        super(props)
            this.state = {
                    docs : [
                    { id: 1, value: "Finding the parts of the contract i need to review", isChecked: false},
                    { id: 2, value: "Missing things when reviewing documents", isChecked: false},
                    { id: 3, value: "Finding the best wording when drafting clauses", isChecked: false},
                    { id: 4, value: "Checking definitions and cross references thought the document", isChecked: false},
                    { id: 5, value: "Standardizing reviews according to you playbook", isChecked: false},
                    { id: 6, value: "It takes too long", isChecked: false},
                    { id: 7, value: "No time to rain up juniors", isChecked: false}
                    
                ]

            }
            console.log(this.state);
    }

    docHandler = (event) => {
        let docs = this.state.docs
        docs.forEach(doc => {
           if (doc.value === event.target.value)
              doc.isChecked =  event.target.checked
        })
        this.setState({docs: docs})
    }
    render() {
        const newdocs = this.state.docs.map((doc) => {
           
            return(
                <div className="border-inp">
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox"  key ={this.state.docs.id} onClick = {this.docHandler}   value = {this.state.docs.value} checked = {this.state.docs.checked} /> {doc.value}
                    </span>
                </label>
            </div> 
            )
        })
        return (
            <div>
                <div className = "ScreenFourbg">
                <div id="viewport" className = "screenFourview">
                    <h3 className = "wel">
                        Welcome
                    </h3>
                    <div>
                        <h5 className = "role">
                            What are your frustrations when you are looking at documents ?
                        </h5>
                        {newdocs}
                    </div>
                    <div className="grid-container btndiv">
                        <div className="grid-child">
                            <Link to="/screenthree">
                                <button className="btn">Back</button>
                            </Link> 
                        </div>
                        <div className="grid-child">
                            <Link to="/screenfive">
                                <button className="btn">Next</button>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
