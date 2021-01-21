import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ScreenFi.css';

export default class Screen extends Component {
    render() {
        return (
            <div>
                <div className = "ScreenFivebg">
                <div id="viewport" className = "screenFiveview">
                    <h3 className = "wel">
                        Welcome
                    </h3>
                    <div>
                        <h5 className = "role">
                        Would you like one of our authortraining experts to assist you with a training session?
                        </h5>
                        <div className="borderinp">
                <label className="checkbox">
                <span className="checkbox__input">
                                    <i className="far fa-calendar-alt"></i>
                                </span>
                                <span className="radio__label">Booking a training time</span>
                </label>
            </div> 
                    </div>
                    <div className="grid-container btndiv">
                        <div className="grid-child">
                            <Link to="/screenfour">
                                <button className="btn">Back</button>
                            </Link> 
                        </div>
                        <div className="grid-child">
                            <Link to="/screenfive">
                                <button className="btn">Done</button>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
