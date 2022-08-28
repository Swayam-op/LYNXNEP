import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Detail from './components/Detail';
import Screen
 from './components/Screen';
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
         <Route  path='/' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/detail/:id'  element={<Detail/>}/>
         <Route path='/screen/:video' element={<Screen/>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
