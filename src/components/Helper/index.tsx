import React from "react";
import { Container, CustomError } from "./styles";

interface ErrorProps {
  error: any;
}

export function ErrorComponent({ error }: ErrorProps) {
  if (!error) return null;
  return (
    <Container>
      <CustomError>{error}</CustomError>
    </Container>
  );
}
