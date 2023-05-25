/* eslint-disable*/

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Detail from './components/detail';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
