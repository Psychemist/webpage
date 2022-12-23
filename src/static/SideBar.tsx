import React from 'react'
import '../css/Sidebar.css'
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSearch, FaThList, FaBookmark, FaBullhorn } from 'react-icons/fa';


export default function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-icon-container">
        <Link to="home" className="link"><FaHome className="icon" /><span>主頁</span> </Link>
        <Link to="about" className="link"><FaInfoCircle className="icon" /><span>關於我們</span> </Link>
        <Link to="activity" className="link"><FaSearch className="icon" /><span>活動搜尋</span> </Link>
        <Link to="application" className="link"><FaThList className="icon" /><span>我的申請</span> </Link>
        <Link to="bookmark" className="link"><FaBookmark className="icon" /><span>書籤</span> </Link>
        <Link to="news" className="link"><FaBullhorn className="icon" /><span>最新消息</span> </Link>
        <Link to="cms" className="link"><span>進入CMS</span> </Link>
      </div>

    </nav>
  )
}
