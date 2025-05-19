import React from 'react'
import LeftBanner from '../components/Home/Banner/LeftBanner'
import RightBanner from '../components/Home/Banner/RightBanner'
import ChatPreview from '../components/Home/middle/ChatPreview'
import VisitsPreview from '../components/Home/middle/VisitsPreview'
import ChartPreview from '../components/Home/middle/ChartPreview'

const HomePage = () => {
  return (
<div>
  <div className='flex flex-col md:flex-row '>
     <LeftBanner/>
     <RightBanner/>
    </div>

    <ChatPreview/>
    <VisitsPreview/>
    {/* <ChartPreview/> */}
</div>
  )
}

export default HomePage