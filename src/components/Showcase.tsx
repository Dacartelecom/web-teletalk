import showcase from '../img/showcase.png'
const Showcase = () => {
  return (
    <div className='container-show flex flex-row-reverse items-center'>
    <img src={showcase} alt="Img-Promo" className='w-[850px]'/>      
    <div className='text-7xl font-bold text-white'>
    <span>LOS MEJORES <br /> TALENTOS DE LA <br /> INDUSTRIA CALL CENTER <br /> <p className='text-xl font-normal'>Garantizamos la Prestación de un servicio óptimo por parte del capital humano</p></span>
    </div>
    </div>
  )
}

export default Showcase
