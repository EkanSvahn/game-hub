import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/fox.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, NavLink } from "react-router-dom";

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
