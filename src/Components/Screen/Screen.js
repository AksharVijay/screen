import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Screen.css';

export default class Screen extends Component {
    constructor(props){
        super(props)
            this.state = {
                roles : [
                    { id: 1, value: "Contracts manager", isChecked: false},
                    { id: 2, value: "In-house counsel", isChecked: false},
                    { id: 3, value: "IT administrator", isChecked: false},
                    { id: 4, value: "Law clerk", isChecked: false},
                    { id: 5, value: "Legal administrator", isChecked: false},
                    { id: 6, value: "Legal operations manager", isChecked: false},
                    { id: 7, value: "Legal secretary", isChecked: false},
                    { id: 8, value: "Paralegal", isChecked: false},
                    { id: 9, value: "Procurement manager", isChecked: false},
                    { id: 10, value: "Solicitor", isChecked: false},
                    { id: 11, value: "Other", isChecked: false}
                    
                ],
            aksha : 'aksk'

            }
            console.log(this.state);
    }

    roleHandler = (event) => {
        let roles = this.state.roles
        roles.forEach(role => {
           if (role.value === event.target.value)
              role.isChecked =  event.target.checked
        })
        this.setState({roles: roles})
    }
    render() {
        const newRoles = this.state.roles.map((role) => {
           
            return(
                <div className="border-inp">
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox"  key ={this.state.roles.id} onClick = {this.roleHandler}   value = {this.state.roles.value} checked = {this.state.roles.checked} /> {role.value}
                    </span>
                </label>
            </div> 
            )
        })
        return (
            <div>
                <div className ="Screenbg">
                <div id="viewport" className = "screenview">
                    <h3 className = "wel">
                        Welcome
                    </h3>
                    <div>
                        <h5 className ="role">
                            What is your role?
                        </h5>
                        {newRoles}
                    </div>
                    <div className="grid-container btndiv">
                        <div className="grid-child green">
                            <Link to="/screentwo">
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
