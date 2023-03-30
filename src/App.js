import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VideoCard from './components/VideoCard';
import AddVideo from "./components/AddVideo" 
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoPlayer} />
          <Route exact path="/add-video" component={AddVideo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
