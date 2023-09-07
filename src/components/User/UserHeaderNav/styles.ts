import { NavLink as CustomLink } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  activeMobile: boolean | null;
}

interface NavProps extends ButtonProps {
  activeMenu: boolean;
}

export const Container = styled.nav<NavProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  a.active svg > * {
    fill: #fb1;
  }

  ${({ activeMobile }) =>
    activeMobile &&
    ` 
    display: block; 
    position: absolute; 
    top: 70px;
     right: 0px;
     padding: 0 1rem;
     background: white;
     box-shadow: 0 1px 2px rgba(0, 0, 0.2);
     border-radius: 0.2rem;
     transform: translateX(-10px);
     opacity: 0;
     pointer-events: none;

     a,button{
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;
     }

     svg{
      margin-right: 0.5rem;
    }

    button{
      border-bottom: none;
    }

    a:hover svg > *,
    button:hover svg > *
     {
      
     fill: #fb1;
     
    }
    a:hover, a:focus,
    button:hover, button:focus{
      box-shadow: none;
      border-color: none;
    }
      a.active {
    background: white;
    box-shadow: none;
  }
    `}
  ${({ activeMenu }) =>
    activeMenu &&
    `
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index:100;
    pointer-events: initial;
    `}
`;

export const NavLink = styled(CustomLink)``;

export const Button = styled.button``;

export const ButtonMenu = styled.button<ButtonProps>`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &:focus,
  &:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  ${({ activeMobile }) =>
    activeMobile === true &&
    `
   outline: none;
   background: white;
   box-shadow: 0 0 0 3px #fea;
   border-color: #fb1;
   color: #fb1;

   &::after{
    transform:rotate(90deg);
    width:4px;
    height:4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
   }
  `}
`;
