import React from 'react';
import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Screen from './Components/Screen/Screen';
import Screent from './Components/Screent/Screent';
import Screenth from './Components/Screenth/Screenth';
import ScreenFo from './Components/ScreenFo/ScreenFo';
import ScreenFi from './Components/ScreenFi/ScreenFi';
// //import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  return (
    <BrowserRouter>
        <div className = "App">
          <Switch>
            <Route path="/" exact component = { Screen } />
            <Route path="/screentwo" component = { Screent } />
            <Route path="/screenthree" component = { Screenth } />
            <Route path="/screenfour" component = { ScreenFo } />\
            <Route path="/screenfive" component = { ScreenFi } />
          </Switch>

        </div>
    </BrowserRouter>

  );
}

export default App;
