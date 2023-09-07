import React, { useContext } from "react";
import { Container, Nav, Logo, Login } from "./styles";
import { UserContext } from "../../UserContext";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { ReactComponent as UserIcon } from "../../Assets/usuario.svg";

export function Header() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext not provided!");
  }
  const { data } = userContext;

  return (
    <Container>
      <Nav>
        <Logo to="/" className="logo" aria-label="Dogs - Home">
          <Dogs />
        </Logo>
        {data ? (
          <Login to="/conta" className="login">
            <span> {data.username} </span>
            <UserIcon />
          </Login>
        ) : (
          <Login to="/login" className="login">
            <span> Login / Criar</span>
            <UserIcon />
          </Login>
        )}
      </Nav>
    </Container>
  );
}
