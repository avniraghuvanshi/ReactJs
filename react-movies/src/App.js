import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Details from './Components/Details';

const App = () =>{
  return(
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='details/:movieId' element={<Details />} />
        </Routes>
    </div>
  );
}

export default App;
