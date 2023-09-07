import React from "react";
import { Container, CustomTitle } from "./styles";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <Container>
      <CustomTitle>{title}</CustomTitle>
    </Container>
  );
}
