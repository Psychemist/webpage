import React from 'react'
import '../css/Home.css'
import Footer from '../static/Footer'

export default function Home() {


  return (
    <div className="page-container">
      <div className="page-header">
        <div className="subpage-indicator">主頁{">"}{ }</div>
        <div className="tab-menu">
          <div className="tab"><div className="tab-text">莘莘入場：學校文化日計畫</div></div>
          <div className="tab"><div className="tab-text">少年登台：學校演藝實踐計畫</div></div>
          <div className="tab"><div className="tab-text">青年探藝：高中生藝術新體驗計畫</div></div>
          <div className="tab"><div className="tab-text">天空故事：初小校園藝術計畫</div></div>
        </div>
      </div>

      <div className="subpage-wrapper">
        <div className="subpage-content">
          <div className="activity-info">
            <img src={require('../assets/banner.png')} alt="activity-banner" />
          </div>
          <div className="activity-detail">
            <div>節目詳情</div>
            <div>2021/22莘莘入場：學校文化日計畫</div>
            <div>節目藝術活動</div>
            <div>博物館及視覺藝術活動</div>
            <div>圖書館活動</div>
          </div>
        </div>
      </div>

      <div className="page-footer">

      </div>

      <Footer />

    </div>
  )
}
