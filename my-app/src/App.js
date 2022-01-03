// Using JSX here means atribts is in camelCase i.e. className, tabIndex etc.

import React from 'react';

// Routing
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/index';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

// Context
import UserProvider from './context';

// Styles
import { GlobalStyle } from './globalStyle';


function App() {
  return (
    <Router>
      <UserProvider>
        <Header/>
    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Router path='/login' element={<Login/>} />
          <Route path='/:movieId' element={<Movie/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>

        <GlobalStyle/>
      </UserProvider>
    </Router>
  );
}

export default App;
