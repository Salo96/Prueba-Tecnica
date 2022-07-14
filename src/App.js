import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Home from './pages/Home';
import Album from './pages/Photo';
import Photo from './pages/Album';
import AddEdit from './pages/AddEdit';
import Header from './components/Header';
import Post from './pages/Post';
import Comments from './pages/Comments';
import Pots from './pages/Pots';
import User from './pages/User';
import Photos from './pages/Photos';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer/>
        <Routes>
          <Route path="/" element= {< Pots/>} />
          <Route path="/index/:id" element= {< Pots/>} />
          <Route path = "/add" element = {<AddEdit />}/>
          <Route path = "/update/:id" element = {<AddEdit />}/>
          <Route path = "/photo/:id" element = {<Album/>}/>
          <Route path = "/album/:id" element = {<Photo/>}/>
          <Route path = "/post/:id" element = {<Post/>}/>
          <Route path = "/comments/:id" element = {<Comments/>}/>
          <Route path = "/user/:id" element = {<User/>}/>
          <Route path = "/users" element = {<Home/>}/>
          <Route path = "/photos" element = {<Photos/>}/>
          <Route path = "/photos/:id" element = {<Photos/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
