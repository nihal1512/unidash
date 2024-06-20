import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Watchlist from './pages/WatchList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          
            <Route path="watchlist" element={<Watchlist/>}/>

          </Routes>
        </Router>
        <div>
        <ToastContainer />
        </div>
      </div>  
    </>
  )
}

export default App
