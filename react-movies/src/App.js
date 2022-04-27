import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import SearchList from './Components/SearchList';

const App = () =>{
  return(
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search/:title' element={<SearchList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
