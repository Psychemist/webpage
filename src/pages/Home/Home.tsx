import React, { useEffect, useState } from 'react'
import '../../css/Home.css'
import Footer from '../../static/Footer'
import { activityDetails } from '../../activityDetails'
import ActivityItem from './ActivityItem'

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(1)
  // const [tabMenuStatus, setTabMenuStatus] = useState<Object>()
  // console.log("tabMenuStatus: ", tabMenuStatus)

  const selectTab = (index: number) => {
    setActiveTabIndex(index)
  }

  useEffect(() => {


  }, [activeTabIndex])

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="subpage-indicator">主頁{" > "}<span className="subpage-title">{activityDetails[activeTabIndex - 1].name}</span></div>
        <div className="tab-menu">
          {activityDetails.map((item: any) => (
            <div className={activeTabIndex == item.index ? "active-tab" : "tab"} key={item.index} onClick={() => selectTab(item.index)}>{item.name}</div>
          ))}
        </div>
      </div>

      <ActivityItem item={activityDetails[activeTabIndex - 1]} />

      <Footer />

    </div>
  )
}
