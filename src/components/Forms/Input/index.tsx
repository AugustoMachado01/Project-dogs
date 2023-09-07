import React, { InputHTMLAttributes } from "react";
import { Container, CustomInput, Label, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export function Input({
  label,
  type,
  name,
  error,
  onBlur,
  onChange,
  value,
}: InputProps) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <CustomInput
        id={name}
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
