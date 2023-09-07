import React, { ReactNode, useContext } from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

interface FieldProps {
  children: ReactNode;
}

export function ProtectedRouter({ children }: FieldProps) {
  const userContext = useContext(UserContext);

  if (!userContext) throw new Error("UserContext not provided!");

  const { login } = userContext;

  return login ? <>{children}</> : <Navigate to="/login" />;
}
