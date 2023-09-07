import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Title } from "../../Forms/Title";
import { UserHeaderNav } from "../UserHeaderNav";
import { useLocation } from "react-router-dom";

export function UserHeader() {
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    if ("/conta/estatistica" === pathname) setTitle("Estatistica");
    if ("/conta/postar" === pathname) setTitle("Poste sua foto");
    if ("/conta" === pathname) setTitle("Conta");
  }, [location]);

  return (
    <Container>
      <Title title={title} />
      <UserHeaderNav />
    </Container>
  );
}
