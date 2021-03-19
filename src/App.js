import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent';
import './App.css'
import Customers from './Customers';
import Transfer from './Transfer';
import { Route,Switch } from "react-router-dom";
import Confirm from './Confirm';

const App=()=> {
 
    return (
      <>
      <div className="app-contain">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={MainContent}/>
        <Route  path='/customers' component={Customers}/>
        <Route  exact path='/transfer/:id' component={Transfer}/>
        <Route exact path='/confirm' component={Confirm}/>
      </Switch>

      </div>
      </>
    );
};

export default App;
