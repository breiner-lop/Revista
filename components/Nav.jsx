import Link from 'next/link'
import React from 'react'

export default function Nav() {
    const [navOn,setNavOn]=React.useState(false)
    return (
        <nav className={`text-white fixed ${navOn&&"bg-gray-800 bg-opacity-50 backdrop-blur-xl backdrop-filter shadow-lg z-50"}  left-0  py-2 px-4 h-full lg:w-[18%] w-[25%]`}>
            <div className={`${navOn&&"border-b border-gray-400"}`}>
                <button onClick={()=>setNavOn(!navOn)}><img src="/imgs/lista.png" alt="" className='w-[20%]' /></button>
            </div>
            {navOn&&<ul className='py-10 uppercase font-semibold'>
                <Link href="/"><li className='py-2  hover:border-l-2 px-2 cursor-pointer hover:border-blue-600'>Grandland</li></Link>
                <Link href="/bmw"><li className='py-2  hover:border-l-2 px-2 cursor-pointer hover:border-blue-600'>Bmw</li></Link>
                <Link href="/"><li className='py-2  hover:border-l-2 px-2 cursor-pointer hover:border-blue-600'>toyota</li></Link>
                <Link href="/"><li className='py-2  hover:border-l-2 px-2 cursor-pointer hover:border-blue-600'>mazda</li></Link>
                <Link href="/"><li className='py-2  hover:border-l-2 px-2 cursor-pointer hover:border-blue-600'>Kia</li></Link>
                <Link href="/"><li className='py-2  hover:border-l-2 px-2 cursor-pointer hover:border-blue-600'>Renault</li></Link>
            </ul>}
        </nav>
    )
}
