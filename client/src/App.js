import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Landing from "./Pages/Landing"
import Home from "./Pages/Home"
import Detail from './Pages/Detail';
import Nav from "./Components/Nav"
import Form from './Pages/Form';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import { useSelector } from 'react-redux';
import React from 'react';

function App() {
  const location = useLocation()


const {Loading,DetailRend} = useSelector((state) => state)


  return (
    <React.StrictMode>
      <div className="App">
      <header>
        <div className='Nav'>
          {location.pathname !== "/" && location.pathname !=="/Create"  && !Loading  && <Nav/>}
        </div> 
        


      </header>
      <main>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path ="/Detail/:idRace" element={<Detail />} />
        <Route exact path='/Create'element={<Form/>}/>
        <Route exact path ="/About" element={<About/>}/>
        <Route exact path = "*" element = {<ErrorPage/>}/>
      </Routes>
      </main>
      <footer>
        
      </footer>
      
    </div>
    </React.StrictMode>
    
  );
}

export default App;
