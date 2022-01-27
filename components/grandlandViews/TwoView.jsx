import React from 'react'
import {AnimatedSlideInLeft} from './ThreeStyled'

export default function TwoView() {
    return (
        <div className="bg-white flex filter drop-shadow-lg justify-start rounded w-[96%] h-full bg-contain bg-right bg-no-repeat" style={{backgroundImage:"url(/imgs/tres.jpg)"}}>
       <AnimatedSlideInLeft className='w-2/5 float-left text-justify text-[8px] lg:text-base 2xl:text-base ld:pt-6 pt-1 pl-4'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae labore, odio corporis facilis veniam aliquid beatae officiis nostrum minima id, repellendus fuga ducimus incidunt ea pariatur doloremque reiciendis quas?
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure optio reprehenderit, quaerat aut recusandae, quia veritatis delectus eaque accusantium in placeat neque sit illum dolorem aspernatur numquam, ratione excepturi cupiditate.
       </AnimatedSlideInLeft>
      </div>
    )
}
