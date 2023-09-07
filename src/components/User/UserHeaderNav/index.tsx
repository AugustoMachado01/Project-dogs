import React, { useContext, useState, useEffect } from "react";
import { Container, NavLink, Button, ButtonMenu } from "./styles";
import { UserContext } from "../../../UserContext";
import { ReactComponent as MyPhoto } from "../../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../../Assets/adicionar.svg";
import { ReactComponent as Out } from "../../../Assets/sair.svg";
import { useMedia } from "../../../Hooks/useMedia";
import { useLocation } from "react-router-dom";

export function UserHeaderNav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const userContext = useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem)");

  if (!userContext) throw new Error("Não está definido");
  const { userLogOut } = userContext;

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <ButtonMenu
          activeMobile={mobileMenu}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></ButtonMenu>
      )}
      <Container activeMobile={mobile} activeMenu={mobileMenu}>
        <NavLink to="/conta" end>
          <MyPhoto />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatistica">
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>

        <Button onClick={userLogOut}>
          <Out />
          {mobile && "Sair"}
        </Button>
      </Container>
    </>
  );
}
