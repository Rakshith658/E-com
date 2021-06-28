import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

//Screens..........
import HomeScreen from './components/Home'
import ProductScreen from './components/ProductScreen'
import CartScreen from './components/Cart'

//components
import NavBar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawar from './components/SideDrawar'

function App() {
  const [toglle, settoglle] = useState(false)

  return (
    <Router>
      <div className="app">
        <NavBar click={()=>settoglle(true)}/>
        <SideDrawar show={toglle} click={()=>settoglle(false)}/>
        <Backdrop show={toglle} click={()=>settoglle(false)}/>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/product/:id" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
