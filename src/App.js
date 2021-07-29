
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Component/aboutUs/AboutUs';
import Login from './Component/auth/Login';
import Signup from './Component/auth/Signup';
import Header from './Component/Header';
import Home from './Component/home/Home';
import Product from './Component/product/Product';
import TechNova from './Component/TechNova';
//import { useState } from 'react';

function App() {

  //const[name,setName]=useState("")

  // const handleChange = e => { 

  //   console.log(e.target.value)
  // }

  // const handleClick = () => { 
  //   console.log("I am clicked")
  // }
  return (

    <div className="App">

      {/* <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>CLICKME</button>
      <TechNova name="pawan" age="24"></TechNova>


      <TechNova name="Aashish" age="24"></TechNova> */}

      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product" component={Product}></Route>
        <Route exact path="/aboutus" component={AboutUs}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="login" component={Login}></Route>

      </Switch>
      
      </BrowserRouter>


     
      <TechNova></TechNova>
    
    </div>
  );
}

export default App;
