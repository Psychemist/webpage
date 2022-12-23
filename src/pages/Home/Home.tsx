import React, { useEffect, useState } from 'react'
import '../../css/Home.css'
import Footer from '../../static/Footer'
import { activityDetails } from '../../activityDetails'
import ActivityItem from './ActivityItem'

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(1)
  const selectTab = (index: number) => {
    console.log("clicked on Tab", index)
    setActiveTabIndex(index)
  }

  // useEffect(() => {

  // }, [activeTabIndex])

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="subpage-indicator">主頁{">"}{activityDetails[activeTabIndex - 1].name}</div>
        <div className="tab-menu">
          {activityDetails.map((item) => (
            <div className="tab" key={item.index} onClick={() => selectTab(item.index)}>{item.name}</div>
          ))}
        </div>
      </div>

      <ActivityItem item={activityDetails[activeTabIndex - 1]} />

      <Footer />

    </div>
  )
}
