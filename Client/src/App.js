import React from 'react';
import HomePage from './routes/HomePage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/Signup';
import SearchBar from './Search';

function App() {
  return (
    <Routes> 
        <Route path ='/' element={<SearchBar />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} >
        </Route>
        <Route path='/signup' element={<SignupPage />}></Route></Route>
        </Routes> 
    );
    }


export default App;