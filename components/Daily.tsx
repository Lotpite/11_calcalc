import React from 'react'
import Progress from './Progress'

const Daily = () => {
  return (
    <div className='flex flex-col justify-center w-full items-center sm:gap-20'>
      <div className='flex flex-row justify-around w-full items-center sm:gap-5'>
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

      <div className='flex flex-row w-full justify-between items-center sm:gap-10'>
        <div className='flex flex-col items-center'>
          <h5 className='text-md text-gray-400'>Breakfast</h5>
          <p className='text-sm text-green-500 font-semibold'>400</p>
        </div>
        <div className='flex flex-col items-center'>
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
        </div>
      </div>
    </div>
  )
}

export default Daily