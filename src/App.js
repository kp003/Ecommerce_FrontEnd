
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Component/aboutUs/AboutUs';
import AdminDashboard from './Component/admin/AdminDashboard';
import CreateCategory from './Component/admin/category/CreateCategory';
import DeleteCategory from './Component/admin/category/DeleteCategory';
import ManageCategory from './Component/admin/category/ManageCategory';
import UpdateCategory from './Component/admin/category/UpdateCategory';
import CreateProduct from './Component/admin/product/CreateProduct';
import DeleteProduct from './Component/admin/product/DeleteProduct';
import ManageProduct from './Component/admin/product/ManageProduct';
import UpdateProduct from './Component/admin/product/UpdateProduct';
import Login from './Component/auth/Login';
import Signup from './Component/auth/Signup';
import Category from './Component/category/Category';
import Header from './Component/Header';
import Home from './Component/home/Home';
import Product from './Component/product/Product';
import TechNova from './Component/TechNova';
import Userdashboard from './Component/user/Userdashboard';
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
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/category" component={Category}></Route>
        <Route exact path="/user/dashboard" component={Userdashboard}></Route>
        <Route exact path ="/admin/dashboard" component={AdminDashboard}></Route>
        <Route exact path ="/createCategory" component={CreateCategory}></Route>
        <Route exact path ="/manageCategory" component={ManageCategory}></Route>
        <Route exact path ="/cateUpdate/:catId" component={UpdateCategory}></Route>
        <Route exact path ="/cateDelete/:catId" component={DeleteCategory}></Route>
        <Route exact path ="/createProduct" component={CreateProduct}></Route>
        <Route exact path ="/manageProduct" component={ManageProduct}></Route>
        <Route exact path ="/productUpdate/:proId" component={UpdateProduct}></Route>
        <Route exact path ="/productDelete/:proId" component={DeleteProduct}></Route>       

      </Switch>
      
      </BrowserRouter>


     
      <TechNova></TechNova>
    
    </div>
  );
}

export default App;
