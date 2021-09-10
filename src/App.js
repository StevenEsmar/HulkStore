import './App.css';
import Store from './components/Store';
import HomeAdmin from './components/HomeAdmin';
import AuthUser from './components/AuthUser';
import React from 'react';
import {
  HashRouter,
  Switch,
  Route, 
} from "react-router-dom";

class App extends React.Component {
  
  render() {
    
      return (
        <HashRouter>
          <div className="App content">
            <Switch>
              
              <Route path="/homeAdmin" component={HomeAdmin}/>  
              <Route path="/Authentication" component={AuthUser}/> 
              <Route path="/" component={Store}/>
                
            </Switch>
          </div>
        </HashRouter>
      );
  }
}

export default App;