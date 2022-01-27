import React from 'react'

export default function ThreeVideoPop({setVideoo}) {
    return (
        <div className='fixed z-50 py-10  w-full h-full mx-auto bg-black bg-opacity-90'>
          <div className='h-full flex justify-end px-2'>
          <button onClick={()=>setVideoo(false)} className='text-white absolute h-10 w-[5%] rounded-lg bg-blue-900 hover:bg-blue-600 transition duration-150 '>X</button>
           <video className='mx-auto rounded-xl h-full' controls autoPlay src="https://res.cloudinary.com/brenchoweb/video/upload/v1643213171/video_kxbp1u.mp4"/>
          </div>
        </div>
    )
}
