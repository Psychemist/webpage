import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Activity from './pages/Activity';
import Application from './pages/Application';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';
import News from './pages/News';
import Header from './static/Header';
import SideBar from './static/SideBar';

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/application' element={<Application />} />
          <Route path='/bookmark' element={<Bookmark />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
