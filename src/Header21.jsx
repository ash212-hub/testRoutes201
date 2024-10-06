 import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
      this is a nav bar 
      <div className="container">
        <ul >
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink> </li>
            <li><NavLink to="/product">Product</NavLink></li>
             
        </ul>
      </div>
    </div>
  )
}

export default Navbar
