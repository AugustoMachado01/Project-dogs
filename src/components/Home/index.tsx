import React from "react";
import { Container } from "./styles";
import { Feed } from "../Feed";
import { Loading } from "../Helper/Loading";

export function Home() {
  return (
    <Container className="mainContainer">
      {/* <Feed /> */ <Loading />}
    </Container>
  );
}
