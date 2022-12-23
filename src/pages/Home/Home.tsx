import React, { useEffect, useState } from 'react'
import '../../css/Home.css'
import Footer from '../../static/Footer'
import { activityDetails } from '../../activityDetails'
import ActivityItem from './ActivityItem'

export interface Props {
  fontSize: number
}

export default function Home(props: Props) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(1)

  const selectTab = (index: number) => {
    setActiveTabIndex(index)
  }


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

      <ActivityItem item={activityDetails[activeTabIndex - 1]} fontSize={props.fontSize} />

      <Footer />

    </div>
  )
}
