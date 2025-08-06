import React from 'react'
import banner from '../../assets/Banner.png'
import ManualSlidingBar from './ManualSlidingBar'
import AutomaticScroling from './AutomaticScroling'

export default function Home() {

   const imagesSliding = [
        { image: "https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/64304b98-bbd0-4b80-8f89-7fbb95b6f155.jpg?ts=1707312317" },
        { image: "https://images.openai.com/thumbnails/e3c133406bab7b03826d65a932df4df6.webp" },
        { image: "https://images.openai.com/thumbnails/118cf133df941a7d1d866606574004d8.webp" },
        { image: "https://images.openai.com/thumbnails/b409c48d0188c89585c8053c9c588106.webp" },
        { image: "https://m.media-amazon.com/images/I/81kx2IPueEL.jpg" },
        { image: "https://images.openai.com/thumbnails/d580efc0842acd6250e53bbc960d2684.webp" },
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
