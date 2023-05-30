"use client"

import React, { useEffect, useState } from 'react'
import Progress from './Progress'

const Daily = () => {

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAppear(true)
    }, 100)
  }, [])

  return (
    <div className='flex flex-col justify-center w-full items-center'>
      <div className='flex flex-row flex-row justify-around items-center md:gap-20 gap-5'>
        <div className='flex flex-col items-center'>
          <h5 className='text-xl text-gray-400'>Left</h5>
          <p className='text-lg text-green-500 font-semibold'>400</p>
        </div>
        <Progress percent={50}/>
        <div className='flex flex-col items-center'>
          <h5 className='text-xl text-gray-400'>Goal</h5>
          <p className='text-lg text-green-500 font-semibold'>2000</p>
        </div>
      </div>

      <div className='flex flex-row justify-around w-5/6  items-center md:mt-15 xl:mt-5 lg:mt-16 sm:mt-20 mt-14'>
        <div className='flex flex-col items-center justify-center'>
          <h5 className={`text-md text-gray-400 transition duration-75 ease-in-out transform ${appear ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>Breakfast</h5>
          <p className={`text-sm text-green-500 font-semibold transition delay-500 duration-75 ease-in-out transform ${appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>400</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h5 className={`text-md text-gray-400 transition duration-75 delay-200 ease-in-out transform ${appear ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>Breakfast</h5>
          <p className={`text-sm text-green-500 font-semibold transition delay-700 duration-75 ease-in-out transform ${appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>400</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h5 className={`text-md text-gray-400 transition duration-75 delay-300 ease-in-out transform ${appear ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>Breakfast</h5>
          <p className={`text-sm text-green-500 font-semibold transition delay-1000 duration-75 ease-in-out transform ${appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>400</p>
        </div>
        {/* <div className='flex flex-col items-center'>
          <h5 className='text-md text-gray-400'>Dinner</h5>
          <p className='text-sm text-green-500 font-semibold'>600</p>
        </div>
        <div className='flex flex-col items-center'>
          <h5 className='text-md text-gray-400'>Lunch</h5>
          <p className='text-sm text-green-500 font-semibold'>300</p>
        </div>
        <div className='flex flex-col items-center'>
          <h5 className='text-md text-gray-400'>Snacks</h5>
          <p className='text-sm text-green-500 font-semibold'>200</p>
        </div> */}
      </div>
    </div>
  )
}

export default Daily