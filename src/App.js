import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, writingView, readerView } from './components';

//import logo from './logo.svg';
import './App.css';

class App extends Component {

render(){
  return (
      <Router>
    <div className="App">
        <Header/>
        <div className="gobutton" style={{padding:20}}>
        </div>
        <Route path='/writingView' component={writingView}/>
        <Route path='/readerView' component={readerView}/>
    </div>
      </Router>
  );}
}

export default App;
