import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #142e49;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #00bcd4;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }

  &:visited,
  &:link,
  &:focus {
    text-decoration: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #00bcd4;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const HamburgerMenu = styled.div`
  display: block;
  cursor: pointer;
  
  &.active .hamburgerIcon {
    background-color: transparent;
  }

  &.active .hamburgerIcon:before {
    transform: rotate(45deg);
    top: 0;
  }

  &.active .hamburgerIcon:after {
    transform: rotate(-45deg);
    top: 0;
  }
`;

const HamburgerIcon = styled.span`
  width: 30px;
  height: 3px;
  background-color: white;
  position: relative;
  display: block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: white;
    transition: 0.3s;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }
`;

const NavBar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClassName = (path) => {
    return router.pathname === path ? `${NavLink} ${'active'}` : NavLink;
  };

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar>
      <Logo>
        <Link href="/" passHref>
          <span>Interview Prep</span>
        </Link>
      </Logo>

      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu 
        className={isMobileMenuOpen ? 'active' : ''} 
        onClick={handleHamburgerClick}
      >
        <HamburgerIcon className={isMobileMenuOpen ? 'close' : ''}></HamburgerIcon>
      </HamburgerMenu>

      <NavLinks className={isMobileMenuOpen ? 'active' : ''}>
        <li>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/features" passHref>
            <NavLink>Features</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/pricingdetails" passHref>
            <NavLink>Pricing</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/contactus" passHref>
            <NavLink>Contact</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/auth/login" passHref>
            <NavLink>Login</NavLink>
          </Link>
        </li>
      </NavLinks>
    </Navbar>
  );
};

export default NavBar;
