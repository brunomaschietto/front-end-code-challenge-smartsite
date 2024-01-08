import logo from "../../../../_material/images/logo.svg"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="container">
       <img className='logo' src={logo}/>
       <p className="pEstilizado">Todos os direitos reservados - 2020</p>
    </div>
  )
}

export default Footer