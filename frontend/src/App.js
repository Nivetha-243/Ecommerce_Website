import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Fresh from "./components/Fresh";
import Admin from "./components/Admin";
import TodayDeals from "./components/TodayDeals";
import CartPage from "./components/CartPage";



function App() {
  return (
    <div>
      
      <Routes>
      <Route path="/CartPage" element={<CartPage></CartPage>}/>
        <Route path="/Admin" element={<Admin></Admin>}/>
        <Route path="/TodayDeals" element={<TodayDeals/>}/>
        <Route path="/" element={<Login></Login>}/>
        <Route path="/Register" element={<Register></Register>}/>
        <Route path="/Home" element={<Home></Home>}/>
        <Route path="/Fresh" element={<Fresh></Fresh>}/>
      </Routes>
    
    
    </div>
  );
}

export default App;
