import React from 'react';
import { Route,Switch } from 'react-router-dom';
//import { Route, Switch} from 'react-router';


import './App.css';
import Welcome from './component/welcome/Welcome';
import Clock from './component/clock/Clock';
import Contact from './component/contact/Contact';
import Navigation from './component/navigation/Navigation';
import NotFound from './component/notfound/NotFound';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      <Route 
      exact path="/" 
      render={(props)=> <Welcome{...props} name="Sam"/>} 
      />
     <Route path="/clock" component= {Clock} />
     <Route path="/contact" component= {Contact} />
     <Route path="/welcome/:name" component= {Welcome} />

     <Route>
       <NotFound/>
     </Route>
      </Switch> 
     
    </div>
  );
}

export default App;



