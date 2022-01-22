import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>
      <Router>
        <Route path="/" exact>
          <Feelings />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
