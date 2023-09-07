import React, { ReactNode, HTMLProps } from "react";
import { Container, CustomButton } from "./styles";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container>
      <CustomButton>{children}</CustomButton>
    </Container>
  );
}
