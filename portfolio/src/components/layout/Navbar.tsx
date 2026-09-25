import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <header>
            <div>
               <NavLink to="/" >
            Home
          </NavLink>
          <NavLink to="/article" >
            Article
          </NavLink> 
            </div>
        </header>
    )
}