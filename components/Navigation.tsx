import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from './Icon'

const Navigation = () => {
  return (
    <div className='flex sm:flex-col sm:items-center flex-row justify-around w-full h-20 gap-10'>
        <Icon name='home' isActive={false} alt='home'/>
        <Icon name='notebook' isActive={true} alt='notebook'/>
        <Icon name='diagram' isActive={false} alt='diagram'/>
    </div>
  )
}

export default Navigation