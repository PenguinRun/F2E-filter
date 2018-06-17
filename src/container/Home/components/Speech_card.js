import React, { Component } from 'react';

class SpeechCard extends Component {
    render() {
        return (
            <div className="speech-card-area">
                <img src="https://imgur.com/wepyQ3t.jpg" className="speech-card-image" alt="kaohsiung-1"></img>
                <div>
                    <h1 className="speech-card-title">Kogi Cosby sweater.</h1>

                    <p className="speech-card-message">Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu.<br /> Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.</p>
                    <span className="speech-card-speaker">Ethan Foster</span>
                    <span className="speech-card-class">Entertainment</span>
                    <br />
                    <i className="fas fa-map-marker-alt speech-car-information-logo"></i> 
                    <span className="speech-card-information">Kaohsiung City</span>
                    <i className="far fa-calendar-alt speech-car-information-logo"></i> 
                    <span className="speech-card-information">2018/5/24 - 2018/5/31</span>
                </div>
            </div>
        )
    }
}

export default SpeechCard;