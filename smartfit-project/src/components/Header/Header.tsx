import logo from "../../../../_material/images/logo.svg"
import "./Header.css"
const Header = () => {
  return (
    <div className="container">
       <img className='logo' src={logo}/> 
    </div>
  )
}

export default Header