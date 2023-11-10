import { EmblaOptionsType } from 'embla-carousel-react';
import logo from '../img/logo1.png'
import CardValores from './CardValores'
import { CSSProperties, useState } from 'react';
import Carrousel from "./Carousel/Carousel"

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT= 3;
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());

const STYLES_DESKTOP: CSSProperties = {
  aspectRatio: 3.095,
};

const Valores = () => {
  const getChildren =(array:any[])=>(
    array.map((item)=>{
      const {img, children }=item;
      return(
        <CardValores img={img}>
          <span>{children}</span>
        </CardValores>
      )
    })
  )

  const ARRAY_VALORES=[
    {
      img:logo,
      children:'Enfoque especialmente en la gestión de back office y BPO, especializados en servicios de valor liderando el sector financiero gestionando sus procesos de negocio.'
    },{
      img:logo,
      children:'Enfoque especialmente en la gestión de back office y BPO, especializados en servicios de valor liderando el sector financiero gestionando sus procesos de negocio.'
    },{
      img:logo,
      children:'Enfoque especialmente en la gestión de back office y BPO, especializados en servicios de valor liderando el sector financiero gestionando sus procesos de negocio.'
    },{
      img:logo,
      children:'Enfoque especialmente en la gestión de back office y BPO, especializados en servicios de valor liderando el sector financiero gestionando sus procesos de negocio.'
    },
  ]
  const [childrens] = useState<JSX.Element[]>(getChildren(ARRAY_VALORES));
  return (
    <div className="flex flex-col justify-center text-center items-center my-5">
      <span className='color-web text-5xl font-bold my-3'>Nuestros Valores</span>
      <Carrousel  
          classNameSlide="embla__slide mr-10 flex"
          slides={ SLIDES }
          options={ OPTIONS }
          styles={ STYLES_DESKTOP }
          haveButtons={ false }
          haveDots={ true }
          interval={ 5000 }
          childrens={ childrens }
        />
    </div>
  )
}

export default Valores
