
import React from 'react'

const Body = () => {
  return (
    <div className="-space-y-4 lg:flex" >
      <div className="flex items-center justify-center lg:flex-1 lg:order-2   lg:justify-end">
        <img src="./assets/Blue-Shape.svg" alt="blue" className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]" />
        <img src="./assets/Pink-Shape.svg" alt="pink" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]" />
        <img src="./assets/Purple-Shape.svg" alt="purple" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
        <img src="./assets/Hero-Model.png" alt="hero" className="absolute  h-64 lg:h-[400px]" />
      </div>
      <div className=" lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 minutes</h1>
        <p className="font-lato text-gray-400 py-5">With Hoster, got your website up and running in no less than 5 minutes with the most competitive pricing packages available online</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="Email" placeholder="Enter our email" />
          <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-700 text-white">Join Waitlist</button>
        </form>
      <div className="flex gap-2">
      <img src="./assets/Checkmark.svg" alt="tick" />
      <p className="font-lato text-gray-45
       py-10">No Spam, ever, unsubscribe anytime </p>
    </div>
    </div>
    </div>
  )
}

export default Body