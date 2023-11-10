import imagen1 from '../img/atc.jpg' 
import Descripcion from './Descripcion'

const ARRAY_CUADROS=[
  {
    img:imagen1,
    title:'servicio 1 (debe estar superpuesto)',
    children:'Teletalk está compuesto por un equipo talentoso, capacitado y eficiente que vela por garantizar la prestación de un servicio óptimo por parte del capital humano que dentro del centro de contacto interactúa con los clientes de nuestros clientes. Los objetivos de nuestros clientes son nuestros objetivos y por eso brindamos'
  },{
    img:imagen1,
    title:'servicio 1 (debe estar superpuesto)',
    children:'Teletalk está compuesto por un equipo talentoso, capacitado y eficiente que vela por garantizar la prestación de un servicio óptimo por parte del capital humano que dentro del centro de contacto interactúa con los clientes de nuestros clientes. Los objetivos de nuestros clientes son nuestros objetivos y por eso brindamos'
  },{
    img:imagen1,
    title:'servicio 1 (debe estar superpuesto)',
    children:'Teletalk está compuesto por un equipo talentoso, capacitado y eficiente que vela por garantizar la prestación de un servicio óptimo por parte del capital humano que dentro del centro de contacto interactúa con los clientes de nuestros clientes. Los objetivos de nuestros clientes son nuestros objetivos y por eso brindamos'
  },
]
const Servicios = () => {
  return (
    <div className="flex flex-col justify-center text-center my-10">
      <span className=' color-web text-5xl font-bold my-5'>Ofrecemos servicios Como</span>
      <div className='flex justify-around' >
      {ARRAY_CUADROS.map((item)=>(
              <Descripcion img={item.img} tittle={item.title}>
                {item.children}
              </Descripcion>
      ))

      }
      </div>
    </div>
  )
}

export default Servicios
