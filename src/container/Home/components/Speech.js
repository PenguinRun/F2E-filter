import React, { Component } from 'react';

import SpeechCard from './Speech_card'
import Paging from './Paging'

class Speech extends Component {
    render() {
        return (
            <div className="speech-area">
                <span className="showing-title">
                    Showing  <span className="showing-number">15</span> results by…
                    </span>
                <div>
                    <div className="class-area">
                        <span>Koahsiung  </span>
                        <i className="far fa-times-circle"></i>
                    </div>
                    <div className="class-area">
                        <span>Entertainment  </span>
                        <i className="far fa-times-circle"></i>
                    </div>
                </div>
                <SpeechCard />
                <SpeechCard />
                <SpeechCard />
                <Paging />
            </div>
        )
    }
}

export default Speech;