"use client"
import React, { useEffect, useState } from 'react'

interface IProgressProps {
  percent: number
}

const Progress = ({ percent }: IProgressProps) => {

  const [dashOffset, setDashOffset] = useState('');

  useEffect(() => {
    setDashOffset(`calc(630px - (630px * ${percent}) / 100`)
  },[])

  return (
    <div className='flex flex-col w-52 justify-center items-center relative'>
        <div className="bar">
        <style>
          {`
            @keyframes bar_circle {
              0% {
                stroke-dashoffset: 630px;
              }
              100% {
                stroke-dashoffset: ${dashOffset};
              }
            }
          `}
      </style>
            <svg>
                <circle cx='50%' cy='50%' r="50%" style={{
                  strokeDasharray: '630px',
                  strokeDashoffset: dashOffset,
                  // animation: 'bar_circle 1s ease forwards',  
              }}/>

              {/* </circle> */}
            </svg>
        </div>
        <p className='absolute text-2xl'>1200</p>
    </div>
  )
}

export default Progress