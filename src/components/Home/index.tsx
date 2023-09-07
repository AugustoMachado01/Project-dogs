import React from "react";
import { Container } from "./styles";
import { Feed } from "../Feed";

export function Home() {
  return (
    <Container className="mainContainer">
      <Feed />
    </Container>
  );
}
