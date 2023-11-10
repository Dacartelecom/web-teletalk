
const Footer = () => {
  return (
    <div className="flex h-[250px] flex-col bg-black text-white">
      <div className="flex justify-around items-center h-full w-full">
      <div> <span>Este es el logo</span> </div>
      
      <div> 
      <span>Estos son los datos de la empresa</span> 
      <span>Estos son los datos de la empresa</span>
      <span>Estos son los datos de la empresa</span>
      <span>Estos son los datos de la empresa</span>
      </div>
      
      <div className="flex justify-around w-[300px]"> 
          <span>Red social</span>
          <span>Red social</span>
          <span>Red social</span>
       </div>
      </div>
      <hr className="w-[90%] m-auto" />
      <div className="text-center">
        <span> Aqui va el copy</span>
      </div>
    </div>
  )
}

export default Footer
