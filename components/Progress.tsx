import React from 'react'

const Progress = () => {
  return (
    <div >
        
        <div className="bar">
            <svg>
                <circle cx='50%' cy='50%' r="50%"></circle>
            </svg>
            <p>80</p>
        </div>
    </div>
  )
}

export default Progress