import { FC } from "react"
import { CardValoresProps } from "../interfaces/CardValores.props"

const CardValores:FC<CardValoresProps> = ({img, children}) => {
  return (
    <div className="bg-[#0039c6] my-4 flex flex-col justify-center items-center text-xl w-[1000px] rounded-3xl">
        <img src={img} alt="" className='w-[100px] mt-5'/>
        <span className='p-10 text-white'>{children}</span>
      </div>
  )
}

export default CardValores
