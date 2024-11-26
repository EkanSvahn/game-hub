import { Box, HStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Fox.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <NavLink to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" margin={1} />
      </NavLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
