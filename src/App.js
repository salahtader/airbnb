
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';

//JN
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
            <Route exact  path="/">
                <Home />
            </Route>
            
            <Route path="/search">
                <SearchPage />
            </Route>
          
        </Switch>

        <Footer />
      </Router> 
     {/* Home */}
        {/* Header */}
            {/* Search */}
        {/* Banner */}
        {/* Cart */}
        {/* Footer */}
    {/* SearchPage */}

    </div>
  );
}

export default App;
