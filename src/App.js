import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize = 12;
  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  apiKey = process.env.REACT_APP_NEWS_API;
  
  render() {
    return (
      <div>
      <Router>
        <NavBar />  
        <LoadingBar color='#A3A5A7' height={3} progress={this.state.progress} />  
        <Routes>   
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} category='general' country='in' />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} category='business' country='in' />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} category='entertainment' country='in' />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} category='general' country='in' />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} category='health' country='in' />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} category='science' country='in' />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} category='sports' country='in' />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} category='technology' country='in' />} />
        </Routes>
      </Router>
      </div>
    )
  }
}
