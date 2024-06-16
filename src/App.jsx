import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import BRC20List from './pages/BRC20List';


function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="brc20list" element={<BRC20List/>}/>
          </Routes>
        </Router>
      </div>  
    </>
  )
}

export default App
