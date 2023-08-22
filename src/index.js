import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Routes,Route,Link} from "react-router-dom"
import './index.css';
import Home from './pages/Home';
import About from './pages/About';


function App(){
  return (
    <BrowserRouter>
    <header>
      <nav>
      <Link to="/">#VanLife</Link>
    <Link to="/about">About</Link>
      </nav>
    </header>

    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  
);


