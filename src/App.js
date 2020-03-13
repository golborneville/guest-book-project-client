import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, writingView, readerView, Body } from './components';

//import logo from './logo.svg';
import './App.css';
import ModifyView from "./components/ModifyView";
//import Body from "./components/Body";

class App extends Component {
//Header - Body - Footer 은 기본 성능임
render(){
  return (
      <Router >
    <div className="App">
        <Header/>
        <Body/>
        <Route path='/writingView' component={writingView}/>
        <Route path='/readerView' component={readerView}/>

    </div>
      </Router>
  );}
}

export default App;
