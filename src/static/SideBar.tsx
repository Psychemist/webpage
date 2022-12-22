import React from 'react'
import '../css/Sidebar.css'
import { Link } from 'react-router-dom';


export default function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-icon-container">
        <Link to="home" className="link" > 主頁 </Link>
        <Link to="about" className="link" > 關於我們 </Link>
        <Link to="activity" className="link" > 活動搜尋 </Link>
        <Link to="application" className="link" > 我的申請 </Link>
        <Link to="bookmark" className="link" > 書籤 </Link>
        <Link to="news" className="link" > 最新消息 </Link>
        <Link to="cms" className="link" > 進入CMS </Link>
      </div>
    </nav>
  )
}
