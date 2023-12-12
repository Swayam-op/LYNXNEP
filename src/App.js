import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Detail from './components/Detail';
import Screen
 from './components/Screen';
import Animes from './components/Animes';
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
         <Route  path='/' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/animes' element={<Animes/>}/>
         <Route path='/detail/:collectionName/:id'  element={<Detail/>}/>
         <Route path='/screen/:collectionName/:obj/:video' element={<Screen/>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
