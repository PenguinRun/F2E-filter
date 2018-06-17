import React, { Component } from 'react';
import './App.css';
import './container/Home/components/css/Header.css'
import './container/Home/components/css/Content.css'
import './container/Home/components/css/Condition.css'
import './container/Home/components/css/Speech.css'
import './container/Home/components/css/Speech_card.css'
import './container/Home/components/css/Paging.css'

import Header from './container/Home/components/Header'
import Content from './container/Home/components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
