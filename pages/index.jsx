import OneView from "../components/grandlandViews/OneView";
import TwoView from "../components/grandlandViews/TwoView";
import Nav from "../components/Nav";
import { useCasosCtx } from "../contexts/contextApp";
import Slider from "react-slick";
import ThreeView from "../components/grandlandViews/ThreeView";
import FourView from "../components/grandlandViews/FourView";
export default function Home() {
  const {views,setViews}=useCasosCtx()
  return (
    <div className='h-screen bg-gray-900 overflow-hidden'>
      <Nav/>
     <div className="flex items-center">
    <div className="z-30"> <button disabled={views>1&& false} onClick={()=>setViews(views-1)} className="text-white w-10 ml-1"><img src="/imgs/flecha-izquierda.png" alt="" /></button></div>
     <div className="flex h-screen w-full flex-col items-center justify-center">
        {views==1?<OneView/>:views==2?<TwoView/>:views==3?<ThreeView/>:views==4&&<FourView/>}
      
     </div>
    <div className="z-30"> <button onClick={()=>setViews(views+1)} className="text-white w-10 mr-1"><img src="/imgs/flecha-correcta.png" alt="" /></button></div>
     </div>
    </div>
  )
}
