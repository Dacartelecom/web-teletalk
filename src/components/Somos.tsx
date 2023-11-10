import fondo from '../img/fondo-somos.jpg'

const Somos = () => {
  return (
    <div className="somos flex items-center justify-evenly">
      <span className='text-7xl font-bold color-web'>NUESTRA <br /> IDENTIDAD</span>
      <div className='w-[700px] m-5 relative inline-block '>
      <img src={fondo} alt="" className='opacity-50 rounded-3xl'/>
      <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center w-[500px] text-xl font-semibold'><span>
      Somos Teletalk Group, una empresa proveedora de servicios Call Center, con más de 11 años de experiencia en el sector. Contamos con más de 200 colaboradores y un amplio ecosistema de soluciones comerciales. Somos un aliado sólido en la comercialización de los mismos. A través de los años, gracias a nuestro equipo de profesionales altamente cualificados nos hemos consolidado como expertos en el rubro de televentas, creando y fidelizando clientes</span></div>
      </div>
    </div>
  )
}

export default Somos
