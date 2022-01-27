import React from 'react'
import {AnimatedPulse}from './ThreeStyled'

export default function FourView() {
    return (
        <div className='  bg-white bg-opacity-10 relative flex rounded-lg justify-end filter drop-shadow-lg h-full w-[96%]  bg-cover bg-right bg-no-repeat'>
            <div className='w-4/12 overflow-hidden rounded-l-lg'>
               <a href="/imgs/mike.jpg"> <AnimatedPulse src="/imgs/mike.jpg" alt="" className='w-full scale-110 hover:scale-100 transition duration-200 h-1/2 drop-shadow' /></a>
                <AnimatedPulse src="/imgs/mini.jpg" alt="" className='w-full  scale-110 hover:scale-100 transition duration-200  h-1/2' />
            </div>
            <div className='w-4/12 overflow-hidden'>
            <a href="/imgs/misra.jpg"><AnimatedPulse src="/imgs/misra.jpg" alt="" className='w-full h-full scale-110 hover:scale-100 transition duration-200' /></a>
            </div>
            <div className='w-4/12 overflow-hidden rounded-r-lg'>
           <a href="/imgs/jae.jpg"> <AnimatedPulse src="/imgs/jae.jpg" alt="" className='w-full h-[33.33%] scale-110 hover:scale-100 transition duration-200' /></a>
           <a href="/imgs/happy.jpg"> <AnimatedPulse src="/imgs/happy.jpg" alt="" className='w-full h-[33.33%] scale-110 hover:scale-100 transition duration-200' /></a>
            <a href="/imgs/dentro.jpg"><AnimatedPulse src="/imgs/dentro.jpg" alt="" className='w-full h-[33.33%] scale-110 hover:scale-100 transition duration-200' /></a>
            </div>
        </div>
    )
}
