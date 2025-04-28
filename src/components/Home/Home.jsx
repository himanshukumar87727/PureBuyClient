import React from 'react'
import banner from '../../assets/Banner.png'

export default function Home() {
  return (
    <div className='p-10 '>
      <div className='w-full h-[300px] bg-no-repeat bg-cover bg-center rounded-3xl opacity-120 ' style={{backgroundImage: `url(${banner})`, }}>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-5xl mt-10 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Namaste, SatShriAkal, Salaam, Hello...!
        </p>
        <span className="text-gray-500 pb-6">
          Welcome To My Website
        </span>
      </div>
    </div>
    </div>
  )
}
