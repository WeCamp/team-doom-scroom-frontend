import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import Scroom from '../Scroom';
import Footer from './Footer';

import './index.scss';
import './config.scss';

class App extends React.Component {
  render() {
    return (
      <div className="scroom-app">
        <Navigation />
        <Route path="/planning-poker" component={Scroom} />
        <Footer />
      </div>
    );
  }
}

export default App;
