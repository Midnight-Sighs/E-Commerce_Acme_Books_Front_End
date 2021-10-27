import React, { Component } from 'react';
import './Styles/App.css';
import Anon from './Pages/AnonPage/Anon'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: "anon"
    }

   

  }
  render() { 
    return ( 
      <div className="App">
        <Anon currentPage={this.state.currentPage} />
    </div>
    );
  }
}
 
export default App;
