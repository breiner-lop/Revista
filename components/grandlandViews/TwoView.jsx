import React from 'react'
import {AnimatedSlideInLeft} from './ThreeStyled'

export default function TwoView() {
    return (
        <div className="bg-white flex filter drop-shadow-lg justify-start rounded w-[96%] h-full bg-contain bg-right bg-no-repeat" style={{backgroundImage:"url(/imgs/tres.jpg)"}}>
       <AnimatedSlideInLeft className='w-2/5 float-left text-justify text-[8px] lg:text-base 2xl:text-base ld:pt-6 pt-1 pl-4'>
       El mundo digital cambio la forma en que los medios de comunicacion informamos y nos ofrecio una vision diferente de como contarles a nuestros seguidores las historias que tanto les interesa. <br /> <br />  La nueva forma como los lectores consumen informacion, nos llevo a explorar y crear este formato que ustedes estan a punto de experimentar. <br /> <br />   Estimados amigos, V12 Magazine  se convierte en la primera revista 100% interactiva del sector automotor colombiano. Somos una publicación para leer, ver, oír y hasta tocar, que se puede llevar en sus dispositivos moviles o tener en su computador. Aqui la informacion es de doble via porque usted amigo lector, vivira la informacion, la experimentara y estamos seguros de que tambien la disfrutara. <br /> <br />   Sin mas preambulos y de la mano del Todopoderoso, con solo seguir las flechas y hacer clic, viva la nueva experiencia que brinda este innovador formato. ¡Gracias! <br /> <br /> RUBEN GONZALEZ <br /> Director-gerente <br /> GAD"
       </AnimatedSlideInLeft>
      </div>
    )
}
