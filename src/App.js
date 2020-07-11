import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import './App.css';
import About from './image/About';
import Home from './image/Home';
import Navigation from './Navigation';
import Detail from './image/Detail';

function App(){
  return(
     <HashRouter>
       <Navigation />
       <Route path="/"  exact={true} component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/gallery-detail" component={Detail}/>
     </HashRouter>
  )
}
export default App;
