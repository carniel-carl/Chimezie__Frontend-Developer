import React, { useState, useEffect } from "react";
import logo from "./../assets/images/logo.svg";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  // TO SHOW OR HIDE THE NAVIGATION BAR
  useEffect(() => {
    const navBar = document.querySelector(".navbar");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        navBar.classList.remove("fadeOut");
        navBar.classList.add("fadeIn");
      } else if (currentScrollY < scrollY) {
        navBar.classList.remove("fadeIn");
        navBar.classList.add("fadeOut");
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header className="navbar w-full h-[75px] flex items-center pl-[30px] md:pl-[48px] fixed top-0 left-0 z-10 bg-black">
      <img src={logo} alt="logo" aria-label="spaceX logo" />
    </header>
  );
};

export default Navbar;
