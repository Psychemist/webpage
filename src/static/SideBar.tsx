import React from 'react'
import '../css/Sidebar.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Activity from '../pages/Activity';
import Application from '../pages/Application';
import About from '../pages/About';
import Bookmark from '../pages/Bookmark';
import News from '../pages/News';


export default function SideBar() {
  return (
    <div className="sidebar">
      <BrowserRouter>

        <div className="navbar">
          <Link to="home" className="link" > 主頁 </Link>
          <Link to="about" className="link" > 關於我們 </Link>
          <Link to="activity" className="link" > 活動搜尋 </Link>
          <Link to="application" className="link" > 我的申請 </Link>
          <Link to="bookmark" className="link" > 書籤 </Link>
          <Link to="news" className="link" > 最新消息 </Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/application' element={<Application />} />
          <Route path='/bookmark' element={<Bookmark />} />
          <Route path='/news' element={<News />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
