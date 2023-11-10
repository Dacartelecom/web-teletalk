import gift from '../img/file.webp'
const Satisfaccion = () => {
  return (
    <div className="fondo-web text-center">
      <div className="p-5">
      <span className="text-4xl font-bold text-white">SATISFACCIÓN DEL 100% EN CALIDAD DE SERVICIO</span>
      <div className="flex items-center justify-center p-5">
        <div>
        <img src={gift} alt="video" className='rounded-3xl'/>
        </div>        
        <div className="flex flex-col w-[700px] text-white text-xl ml-10">
          <span>" Teletalk está compuesto por un equipo talentoso, capacitado y eficiente que vela por garantizar la prestación de un servicio óptimo por parte del capital humano que dentro del centro de contacto interactúa con los clientes de nuestros clientes. Los objetivos de nuestros clientes son nuestros objetivos y por eso brindamos las mejores soluciones del mercado. Tenemos una amplia gama de soluciones comerciales flexibles para todo tipo de negocios. Usamos lo último en tecnología y personal altamente calificado para lograr los mejores resultados de calidad."</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Satisfaccion
