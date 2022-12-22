import React from 'react';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './static/Header';
import SideBar from './static/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      {/* <BrowserRouter>

        <div className="navbar">
          <Link to="game" className="link" > Game </Link>
          <Link to="friend" className="link" > Friend </Link>
          <Link to="community" className="link" > Community </Link>
        </div>

        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/home' element={<Game />} />
          <Route path='/friend' element={<FriendList />} />
          <Route path='/community' element={<Community />} />
        </Routes>

      </BrowserRouter> */}
    </div>
  );
}

export default App;
