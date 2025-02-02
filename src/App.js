import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/Home/Home'; 
import Tutorials from './components/Tutorial/Tutorials';
import TutorialPageInfo from './components/Tutorial/TutorialPageInfo';
import Contact from './components/common/Contact';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Profile from './components/Auth/Profile'
import Otp from './components/Auth/Otp'
import MyTutorials from './components/Auth/MyTutorials';
import Cart from './components/Auth/Cart';
import ForgotPassword from './components/Auth/ForgotPassword';
import UpdatePassword from './components/Auth/UpdatePassword';
import TutorialPage from './components/Tutorial/TutorialPage';

function App() {
  return (
        <div>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<Auth />} /> */}
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/tutorial' element = {<Tutorials/>}/>
              <Route path='/t' element = {<TutorialPage/>}/>
              <Route path="/tutorial/:tutorialId" element={<TutorialPage/>} />
              <Route path="/contact" element={<Contact/>}/>
              {/* <Route path='profile' element={<Profile/>}/> */}
              <Route path="/verify-email" element={<Otp/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/update-password/:id' element={<UpdatePassword/>}/>
              <Route path="/dashboard/my-profile" element={<Profile/>}/>
              <Route path="/dashboard/myTutorials" element={<MyTutorials/>}/>
              <Route path="/dashboard/cart" element={<Cart/>}/>
            </Routes>
          </Router>
        </div>
  );
}

export default App;
