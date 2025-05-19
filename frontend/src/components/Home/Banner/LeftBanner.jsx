import React from 'react'

const LeftBanner = () => {
  return (
    <>
        <div className="flex flex-col w-full md:w-1/3 h-[calc(100vh-62px)] justify-center  gap-y-5" >
            <h1 className="text-4xl font-semibold mb-4 ">Welcome to Infinity Chat <span className='text-primary'>Connect. Share. Repeat.</span></h1>
            <p className="text-lg text-gray-400 mb-8">Real-time messaging made simple, fast, and secure — chat with anyone, anytime, from anywhere.</p>
            <button className=" bg-primary cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Start your conversation today.
            </button>
        </div>
    </>
  )
}

export default LeftBanner