import { NavLink } from "react-router-dom";
import "./Header.css"
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import LogInButton from "../LogInButton/LogInButton";
import LogOutButton from "../LogOutButton/LogOutButton";

function Header() {
  return (
    <>
      <div className="navbar"> 
        
      <NavLink to="" ><h1>&lt;</h1><EmojiFoodBeverageIcon sx={{height:'30px',width:'30px'}}/><h1>/&gt;</h1></NavLink>

      <LogInButton/>
      <LogOutButton/>
      </div>
    </>
  )
}

export default Header