import React from 'react'
import ThreeVideoPop from './popups/ThreeVideoPop'
import {DivAnimated,DivAnimatedLogo} from './ThreeStyled'

export default function ThreeView() {
    const [video,setVideo]=React.useState(false)
    return (
        <div className=" bg-white relative flex rounded-lg justify-end filter drop-shadow-lg h-full w-[96%]  bg-cover bg-right bg-no-repeat" style={{backgroundImage:"url(/imgs/mazdaback.jpg)"}}>
            <button onClick={()=>setVideo(true)} className='absolute mr-4 mt-4 rounded-full transition duration-200 animate-pulse hover:animate-none shadow-[0_0_30px_#780707fd] hover:shadow-[0_0_30px_#780707c2]'><img src="/imgs/videoicon.png" alt="" /></button>
           <div className='w-full'> <DivAnimatedLogo src="/imgs/mazda.png" alt="" className='absolute w-[30%] ml-[2%] drop-shadow-[0_10px_50px_#ea0b0b3d]' /></div>
            <DivAnimated src="/imgs/mazdac.png" alt="" className='w-6/12 h-3/6 mt-[20%] mr-[12%]'/>
           {video&& <ThreeVideoPop setVideoo={setVideo}/>}
      </div>
    )
}
