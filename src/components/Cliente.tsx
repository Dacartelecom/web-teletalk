import { FC } from "react"
import { ClienteProps } from "../interfaces/Cliente.props"

const Cliente:FC<ClienteProps> = ({
  img,
  children

}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={`${img}`} alt="imagen"  className="w-[100px]"/>
      <div>{children}</div>
    </div>
  )
}

export default Cliente
