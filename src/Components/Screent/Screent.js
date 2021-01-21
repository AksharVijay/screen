import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Screent.css';

export default class Screen extends Component {
    constructor(props){
        super(props)
            this.state = {
                    types : [
                    { id: 1, value: "Confidentiality", isChecked: false},
                    { id: 2, value: "Construction", isChecked: false},
                    { id: 3, value: "Corporate documents", isChecked: false},
                    { id: 4, value: "Data privacy", isChecked: false},
                    { id: 5, value: "Disputes", isChecked: false},
                    { id: 6, value: "Employment", isChecked: false},
                    { id: 7, value: "Licenses", isChecked: false},
                    { id: 8, value: "Loans and Financing", isChecked: false},
                    { id: 9, value: "Procurement, Supply and Servcies", isChecked: false},
                    { id: 10, value: "Property and real estate", isChecked: false},
                    { id: 11, value: "Sales and Purchase", isChecked: false},
                    { id: 12, value: "Terms and Conditions", isChecked: false},
                    { id: 13, value: "Other", isChecked: false}
                    
                ]

            }
            console.log(this.state);
    }

    typeHandler = (event) => {
        let types = this.state.types
        types.forEach(type => {
           if (type.value === event.target.value)
              type.isChecked =  event.target.checked
        })
        this.setState({types: types})
    }
    render() {
        const newtypes = this.state.types.map((type) => {
           
            return(
                <div className="border-inp">
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox"  key ={this.state.types.id} onClick = {this.typeHandler}   value = {this.state.types.value} checked = {this.state.types.checked} /> {type.value}
                    </span>
                </label>
            </div> 
            )
        })
        return (
            <div>
                <div className = "Screentwobg">
                <div id="viewport" className = "screentwoview">
                    <h3 className = "wel">
                        Welcome
                    </h3>
                    <div>
                        <h5 className = "role">
                            What types of review do you do?
                        </h5>
                        {newtypes}
                    </div>
                    <div className="grid-container btndiv">
                        <div className="grid-child">
                            <Link to="/">
                                <button className="btn">Back</button>
                            </Link> 
                        </div>
                        <div className="grid-child">
                            <Link to="/screenthree">
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
