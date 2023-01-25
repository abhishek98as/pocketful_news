import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Categories from './Pages/Categories';
import Home from './Pages/Home';


const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
         <Route exact path ="/" element={<Home/>}/>
         <Route  path ="/general" element={<Categories cat="general"/>}/>
         <Route  path ="/Business" element={<Categories cat="Business"/>}/>
         <Route  path ="/Entertaiment" element={<Categories cat="Entertaiment"/>}/>
         <Route  path ="/Health" element={<Categories cat="Health"/>}/>
         <Route  path ="/Science" element={<Categories cat="Science"/>}/>
         <Route  path ="/Sports" element={<Categories cat="Sports"/>}/>
         <Route  path ="/Technology" element={<Categories cat="Technology"/>}/>

      </Routes>
    </Router>

      

      </>
  )
}

export default App