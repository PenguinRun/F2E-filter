import React, { Component } from 'react';
import Condition from './Condition'
import Speech from './Speech'

class Content extends Component {
    render() {
        return (
            <div className="content-area">
                <Condition />
                <Speech />
            </div>
        )
    }
}

export default Content;