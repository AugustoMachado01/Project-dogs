import React, { useContext } from "react";
import { Container, Forms } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";

export function Login() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext not provided!");
  }

  const { login } = userContext;

  if (login) return <Navigate to="/conta" />;

  return (
    <Container>
      <Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </Forms>
    </Container>
  );
}
