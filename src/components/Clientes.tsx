import { useState } from "react"
import './Clientes.css'
import Cliente from "./Cliente"
import Carrousel from "./Carousel/Carousel"
import { EmblaOptionsType } from "embla-carousel-react";
import logo2 from '../img/logo1.png'

const OPTIONS_CARDS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 1,
  startIndex: 0,
};

const SLIDE_COUNT= 4;



const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());


const Clientes = () => {
  const getChildren =(array : any[])=>(array.map((item)=>{
    const { img , children}= item;
    return(
      <div>
        <Cliente img={img}>
          <span>{children}</span>
        </Cliente>
      </div>
    )
  }))

  const ARRAY_IMG=[
    {
      img:`${logo2}`,
      children:'hola'
    },{
      img:`${logo2}`,
      children:'hola'
    },{
      img:`${logo2}`,
      children:'hola'
    },{
      img:`${logo2}`,
      children:'hola'
    },{
      img:`${logo2}`,
      children:'hola'
    },{
      img:`${logo2}`,
      children:'hola'
    },{
      img:`${logo2}`,
      children:'hola'
    }
  ]

  const [childrens] = useState<JSX.Element[]>(getChildren(ARRAY_IMG));
  return (
    <div className="flex flex-col justify-center text-center fondo-web">
      <span className="text-4xl font-bold text-white">Clientes que Han Transformado con Nosotros</span>
      <div className="my-5 flex flex-col justify-center items-center">
      <span className=" text-2xl text-white ">Ayudamos a nuestros clientes con</span>
      <div className="my-7">
      <Carrousel  
          classNameSlide="embla__slide__trhee"
          slides={ SLIDES }
          options={ OPTIONS_CARDS }
          haveButtons={ true }
          haveDots={ false }
          interval={ 0 }
          childrens={ childrens }
        />
      </div>
      </div>
    </div>
  )
}

export default Clientes
