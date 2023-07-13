import { Link } from "react-router-dom";
import { NavbarContainer, NavbarLinkContainer, NavbarLink } from './../styles/NavStyle';
import DreamControl from "./DreamControl";
import SignIn from "./SignIn";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link active" to="/" element={<DreamControl />}>
          Home
        </NavbarLink>
        <NavbarLink className="nav-link" to="/sign-in" element={<SignIn />}>
          Sign In
        </NavbarLink>
      </NavbarLinkContainer>
    </NavbarContainer>
  )
}

export default Navbar;