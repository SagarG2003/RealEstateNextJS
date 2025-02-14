"use client";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import Search from "./Search";

interface Props {
  children: ReactNode;
}

const Appbar = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar className="h-20 mx-auto flex justify-between bg-gradient-to-b from-[#2e2f80] to-[#5636a3] border-radius rounded-b-[70px]" onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
            <p className="pl-20 font-bold text-white text-xl">AdobeX</p>
        </NavbarBrand>
        <Search></Search>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end"></NavbarContent>
      <NavbarContent justify="end">{children}</NavbarContent>
      <NavbarMenu></NavbarMenu>

    </Navbar>
  );
};

export default Appbar;
