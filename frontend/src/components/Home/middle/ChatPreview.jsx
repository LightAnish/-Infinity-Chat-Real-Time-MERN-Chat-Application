import React from 'react'

const ChatPreview = () => {
  return (
    <div className=" py-16 px-8 flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className=" flex flex-col  items-center py-16 px-8 rounded-md shadow-md border-1 ">
            <h2 className="text-3xl font-bold mb-4 ">Why Choose <span className="text-primary">Infinity Chat</span>?</h2>
            <p className=" text-lg max-w-2xl mx-auto">
                Experience seamless, secure, and lightning-fast messaging with modern features designed to keep you connected.
            </p>
         </div>

        <div className="border shadow-md rounded-lg p-4 w-full max-w-md ">
            <p className="font-semibold ">You:</p>
            <div className="bg-primary text-white p-3 rounded-lg my-2 w-fit">Hey, how’s it going?</div>
            <p className="font-semibold ">Friend:</p>
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg my-2 w-fit">All good! Let’s catch up later.</div>
        </div>
    
</div>

  )
}

export default ChatPreview