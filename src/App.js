import React from 'react';
import HomePage from './HomePages';
import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
