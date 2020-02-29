import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './configureStore';
import Home from './components/Home';

const App = () => {
    return (
      
      <React.Fragment>
        <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch> 
            <Switch>
              <Route exact path="/login" component={SignIn}/>
            </Switch> 
            <Switch>
              <Route exact path="/therapist/login" component={SignIn}/>
            </Switch>            
        </ConnectedRouter>
      </React.Fragment>
    )
  
}
export default App;

//configureStoreから持って来て渡している <connectedRouter history={history}>
//switchはApp.jsにあったほうが管理しやすい