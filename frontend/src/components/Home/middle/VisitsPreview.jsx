import React from 'react'

const VisitsPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border-1 shadow-xl rounded-md">
  <div className="stat text-center">
    <div className="text-sm font-medium  mb-2">📥 Downloads</div>
    <div className="text-4xl font-bold text-primary">31K</div>
    <div className="text-sm text-gray-200 mt-1">From Jan 1st to Feb 1st</div>
  </div>

  <div className="stat text-center">
    <div className="text-sm font-medium  mb-2">👥 Active Users</div>
    <div className="text-4xl font-bold text-secondary">4,200</div>
    <div className="text-sm text-secondary mt-1">↗︎ Up 2%</div>
  </div>

  <div className="stat text-center">
    <div className="text-sm font-medium  mb-2">🆕 New Registers</div>
    <div className="text-4xl font-bold text-accent">1,200</div>
    <div className="text-sm text-accent mt-1">↘︎ Down 14%</div>
  </div>
</div>

  )
}

export default VisitsPreview