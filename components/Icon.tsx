// "use client"

import Image from "next/image"
import Link from "next/link"

interface IIconProps {
    name: string
    isActive: boolean
    alt: string
}

const Icon = ({ name, isActive, alt }: IIconProps) => {
    const path = isActive ? `/assets/icons/${name}_active.svg` : `/assets/icons/${name}.svg`

    return (
        <Link href={`/${name === 'home' ? '' : name}`} className='w-20 h-20'>
          <button className='btn_neu w-20 h-20 flex flex-col items-center justify-center'>
            <Image priority={true} alt={alt} src={path} width={40} height={40}/>
          </button>
        </Link>
    )
}

export default Icon