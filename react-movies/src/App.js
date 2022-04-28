import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import SearchList from './Components/SearchList';
import Details from './Components/Details';

const App = () =>{
  return(
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search/:title' element={<SearchList />} />
          <Route path='details/:movieId' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
