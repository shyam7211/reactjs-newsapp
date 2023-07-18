import './App.css';

import React from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


const App = () => {
  const pageSize = 9;

  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API;
  

    return (
      <div>
      <Router>
        <NavBar />  
        <LoadingBar color='#A3A5A7' height={3} progress={progress} />  
        <Routes>   
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} category='general' country='in' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} category='business' country='in' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} category='entertainment' country='in' />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} category='general' country='in' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} category='health' country='in' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} category='science' country='in' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} category='sports' country='in' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} category='technology' country='in' />} />
        </Routes>
      </Router>
      </div>
    )
}

export default App;