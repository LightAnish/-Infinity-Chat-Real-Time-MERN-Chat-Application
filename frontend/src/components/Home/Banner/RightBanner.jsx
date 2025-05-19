import React from 'react'
import bannerImage from '../../../assets/banner_image.png'

const RightBanner = () => {
  return (
    <>
        <div className='flex md:items-center w-full md:w-2/3 md:h-[calc(100vh-62px)] overflow-hidden md:pl-72 '>
            <img draggable={false} className='w-full object-cover' src={bannerImage} alt="" srcset="" />
        </div>
    </>
  )
}

export default RightBanner