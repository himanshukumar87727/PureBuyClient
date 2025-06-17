import React from 'react'
import banner from '../../assets/Banner.png'
import ManualSlidingBar from './ManualSlidingBar'
import AutomaticScroling from './AutomaticScroling'

export default function Home() {

   const imagesSliding = [
        { image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" },
        { image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" },
        { image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80" },
        { image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" },
        { image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" },
        { image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80" },
    ];

  return (
    <div>
      {/* {ManualSlidingBar(imagesSliding)} */}
      {AutomaticScroling(imagesSliding)}
    
      <div className='p-10 '>
        <div className='w-full h-[300px] bg-no-repeat bg-cover bg-center rounded-3xl opacity-120 ' style={{ backgroundImage: `url(${banner})`, }}>
          <div className="flex flex-col items-center justify-center ">
            <p className="pt-10 ml-100 text-5xl mt-10 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
               Hi how are you 
            </p>
            <span className="text-gray-500 ml-100 pb-6">
              Welcome To My Website!
              Here you can buy online groceries
            </span>
          </div>
        </div>
      </div>

      <div className='w-1/2 h-[30vh]'>
              {/* {AutomaticScroling(imagesSliding)} */}
      </div>
              
    </div>
  )
}
