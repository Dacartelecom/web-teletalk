import { FC, useState } from "react"
import { DescripcionProps } from "../interfaces/ImagenDes.props"


const Descripcion: FC <DescripcionProps> = ({
  tittle,
  children,
  img,
}) => {
  const [mostrar,setMostrar]=useState(false)

  return (
      <div className='relative overflow-hidden inline-block' >
            <img src={`${img}`} alt="" className='w-[400px]'onMouseEnter={()=> setMostrar(true)} onMouseLeave={()=>setMostrar(false)}/>
            <span 
            className={`
            absolute left-[50%] ${mostrar? 'top-[2%]': 'top-[-50%]'} transform -translate-x-1/2 -translate-y-1/2 text-center bg-black w-full h-auto transition-all duration-500 text-white items-center`}> {tittle} </span>
            <span className={`absolute left-[50%] ${mostrar? 'top-[86%]': 'top-[150%]'} transform -translate-x-1/2 -translate-y-1/2 text-center bg-black w-full h-[180px] transition-all duration-500 text-white items-center`}>{children}</span>
      </div>
  )
}

export default Descripcion
