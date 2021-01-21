import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Screenth.css';

export default class Screen extends Component {
    constructor(props){
        super(props)
            this.state = {
                    goals : [
                    { id: 1, value: "Improve quality and consistency of my work", isChecked: false},
                    { id: 2, value: "Save time", isChecked: false},
                    { id: 3, value: "Reduce risk", isChecked: false},
                    { id: 4, value: "Enable the wider business/organization", isChecked: false},
                    { id: 5, value: "I dont know", isChecked: false}
                    
                ]

            }
            console.log(this.state);
    }

    goalHandler = (event) => {
        let goals = this.state.goals
        goals.forEach(goal => {
           if (goal.value === event.target.value)
              goal.isChecked =  event.target.checked
        })
        this.setState({goals: goals})
    }
    render() {
        const newgoals = this.state.goals.map((goal) => {
           
            return(
                <div className="border-inp">
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox"  key ={this.state.goals.id} onClick = {this.goalHandler}   value = {this.state.goals.value} checked = {this.state.goals.checked} /> {goal.value}
                    </span>
                </label>
            </div> 
            )
        })
        return (
            <div>
                <div className = "Screenthreebg">
                <div id="viewport" className = "screenthreeview">
                    <h3 className = "wel">
                        Welcome
                    </h3>
                    <div>
                        <h5 className = "role">
                            What are your goals for when you use authorDOCS?
                        </h5>
                        {newgoals}
                    </div>
                    <div className="grid-container btndiv">
                        <div className="grid-child">
                            <Link to="/screentwo">
                                <button className="btn">Back</button>
                            </Link> 
                        </div>
                        <div className="grid-child">
                            <Link to="/screenfour">
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
