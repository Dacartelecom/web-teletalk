import logo from '../img/logo1.png'
const Estamos = () => {
  return (
    <div className="text-center my-10 h-auto">
      <span className='color-web text-5xl font-bold'>Confiabilidad y Calidad en TeleTalk</span>
      <div className="flex justify-evenly items-center my-5">
      <span className="mr-10 text-left text-7xl font-bold color-web">Nuestra Empresa <br /> <span className='text-5xl'>Siempre esta cerce de ti</span></span>
      <div className="grid grid-cols-2 w-[600px]">
        <div className="p-2 flex flex-col justify-center items-center bg-gray-700 text-white w-[300px] h-[300px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-2xl cursor-pointer">
          <img src={logo} alt="Este es un logo" className='w-[30px]'/>
          <span className=''>Soy texto de descripcion</span>
        </div>

        <div className="p-2 flex flex-col justify-center items-center bg-gray-700 text-white w-[300px] h-[300px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-2xl cursor-pointer">
          <img src={logo} alt="Este es un logo" className='w-[30px]'/>
          <span className=''>Soy texto de descripcion</span>
        </div>
        
        <div className="p-2 flex flex-col justify-center items-center bg-gray-700 text-white w-[300px] h-[300px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-2xl cursor-pointer">
          <img src={logo} alt="Este es un logo" className='w-[30px]'/>
          <span className=''>Soy texto de descripcion</span>
        </div>

        <div className="p-2 flex flex-col justify-center items-center bg-gray-700 text-white w-[300px] h-[300px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-2xl cursor-pointer">
          <img src={logo} alt="Este es un logo" className='w-[30px]'/>
          <span className=''>Soy texto de descripcion</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Estamos
