import React from 'react';
import { Provider } from 'react-redux';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
// import store from './store';

// import SignInSide from './pages/Login';
// import Home from './components/currentUser';
import Dashboard from './pages/dashboard';
// import {CurrentUser} from './components/currentUser';
import Login from './pages/Login';
import CurrentUser from './components/currentUser';
import TextEditor from './components/Editor';
import DocPage from './pages/DocPage';



function  App() {

  return(
    <BrowserRouter>
    {/* <CurrentUser/> */}
    <div>
      <Routes>
        <Route path="/Login/" element={<Login/>} />
        <Route path='/test/' element ={<Dashboard/> } />

        <Route path='/Editor/:docId' element ={<DocPage/> } />
        
        {/* <Route path='/Document/:docId' element ={<doc/> } /> */}
        
        <Route> </Route>
      </Routes>
    </div>
    </BrowserRouter>

  );
};

export default App;