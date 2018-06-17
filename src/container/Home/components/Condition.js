import React, { Component } from 'react';

class Condition extends Component {
    render() {
        return (
            <div>
                <div className="location">
                    <span className="condition-title">Location</span>
                    <select className="form-control location-form" id="exampleFormControlSelect1">
                        <option>Taiwan</option>
                        <option>Koahsiung</option>
                    </select>
                </div>
                <div className="date">
                    <span className="condition-title">Date</span>
                    <div className="date-area date-title">
                        <p className="date-area-child">from</p>
                        <input type="date" className="date-form" defaultValue="2018-05-24"></input>
                    </div>
                    <div className="date-area">
                        <p className="date-area-child">to</p>
                        <input type="date" className="date-form" defaultValue="2018-06-01"></input>
                    </div>
                </div>
                <div className="categories">
                    <span className="condition-title">Categories</span>
                    <ul className="categories-area">
                        <li>
                            <input type="checkbox" id="subscribeNews" name="subscribe" defaultValue="all"></input>
                            <span className="categories-title">All</span>
                        </li>
                        <li>
                            <input type="checkbox" id="subscribeNews" name="subscribe" defaultValue="entertainment"></input>
                            <span className="categories-title">Entertainment</span>
                        </li>
                        <li>
                            <input type="checkbox" id="subscribeNews" name="subscribe" defaultValue="food"></input>
                            <span className="categories-title">Food</span>
                        </li>
                        <li>
                            <input type="checkbox" id="subscribeNews" name="subscribe" defaultValue="learning"></input>
                            <span className="categories-title">Learning</span>
                        </li>
                        <li>
                            <input type="checkbox" id="subscribeNews" name="subscribe" defaultValue="outdoors"></input>
                            <span className="categories-title">Outdoors</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Condition;