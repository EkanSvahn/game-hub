import { HStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "src/assets/fox.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <NavLink to="/">
        <Image src={logo} boxSize="70px" objectFit="cover" />
      </NavLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
