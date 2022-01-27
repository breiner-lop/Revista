import React from 'react'
import {AnimatedSlideInLeft} from './ThreeStyled'

export default function TwoView() {
    return (
        <div className="bg-white flex filter drop-shadow-lg justify-start rounded w-[96%] h-full bg-contain bg-right bg-no-repeat" style={{backgroundImage:"url(/imgs/tres.jpg)"}}>
       <AnimatedSlideInLeft className='w-2/5 float-left text-justify text-[8px] lg:text-base 2xl:text-base ld:pt-6 pt-1 pl-4'>
       El mundo digital cambió la forma en que los medios de comunicación informamos y nos ofreció una visión diferente de cómo contarles a nuestros seguidores las historias que tanto les interesa. <br /> <br />  La nueva forma como los lectores consumen información, nos llevó a explorar y crear este formato que ustedes están a punto de experimentar. <br /> <br />   Estimados amigos, V12 Magazine  se convierte en la primera revista 100% interactiva del sector automotor colombiano. Somos una publicación para leer, ver, oír y hasta tocar, que se puede llevar en sus dispositivos móviles o tener en su computador. Aquí la información es de doble vía porque usted amigo lector, vivirá la información, la experimentará y estamos seguros de que también la disfrutará. <br /> <br />   Sin más preámbulos y de la mano del Todopoderoso, con solo seguir las flechas y hacer clic, viva la nueva experiencia que brinda este innovador formato. ¡Gracias! <br /> <br /> RUBÉN GONZÁLEZ <br /> Director-gerente <br /> GAD"
       </AnimatedSlideInLeft>
      </div>
    )
}
