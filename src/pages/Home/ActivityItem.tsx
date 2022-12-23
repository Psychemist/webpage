import React, { useState } from 'react'
import '../../css/ActivityItem.css'


export interface Props {
  item: any
}

export default function ActivityItem(props: Props) {
  const [sectionIndex, setSectionIndex] = useState(0)
  const selectSection = (index: number) => {
    console.log("clicked on", index, ", section: ",)
    setSectionIndex(index)
  }

  return (
    <div className="subpage-wrapper">
      <div className="subpage-content">

        <div className="activity-info">
          <div className="banner-image-wrapper">
            {props.item.banner && <img src={require(`../../assets/${props.item.banner}`)} alt="activity-banner" className="banner-image" />}
          </div>

          <div className="section-menu">
            {props.item.details.map((item: any, index: number) => (
              <div className="section-title" key={index} onClick={() => selectSection(index)}>{item.title}</div>
            ))}
          </div>
          {props.item.details[sectionIndex]
            &&
            <div className="section-detail-container">
              <div className="section-detail-title-wrapper">
                <div className="section-detail-title-symbol"></div>
                <div className="section-detail-title">{props.item.details[sectionIndex].title}</div>
              </div>
              <div className="section-detail-content-wrapper">
                <div className="section-content">{props.item.details[sectionIndex].text}</div>
              </div>
            </div>}
        </div>


        <div className="activity-detail">
          <div className="detail-box-container">
            <div className="title-box"><span className="box-title-text">節目詳情</span></div>
            {props.item.name && <div className="activity-title-box"><span>{props.item.name}</span></div>}
            <div className="highlights-wrapper">
              {props.item.highlights &&
                props.item.highlights.map((item: any, index: number) => (
                  <div className="highlight" >
                    <img src={require(`../../assets/${item.photo}`)} alt="highlights photo" className="highlight-photo" />
                    <div className="highlight-caption" key={index}><span>{item.caption}</span></div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
