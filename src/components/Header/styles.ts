import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`;
export const Nav = styled.nav`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(RouterLink)`
  padding: 0.5rem 0;
`;

export const Login = styled(RouterLink)`
  display: flex;
  align-items: center;
  margin-left: auto;

  svg {
    width: 14px;
    height: 16px;
    margin-left: 4px;
  }

  span {
    color: #333;
  }
`;
