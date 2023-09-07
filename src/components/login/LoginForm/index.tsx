import React, { useContext } from "react";
import {
  Container,
  Form,
  ButtonCreate,
  LinkLost,
  Register,
  SubTitle,
} from "./styles";
import { Input } from "../../Forms/Input";
import { Button } from "../../Forms/Button";
import { useForm } from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext";
import { Title } from "../../Forms/Title";
import { ErrorComponent } from "../../Helper";

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext not provided!");
  }

  const { userLogin, error, loading } = userContext;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      username.validate(username.value) &&
      password.validate(password.value)
    ) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <Container className="animeLeft">
      <Title title="Login" />
      <Form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <ErrorComponent error={error} />}
      </Form>
      <LinkLost to="/login/perdeu">Perdeu a senha</LinkLost>
      <Register>
        <SubTitle>Cadastra-se</SubTitle>
        <p>Ainda não possui uma conta? cadastra-se</p>
      </Register>
      <ButtonCreate to="/login/criar">
        <Button>Cadastrar</Button>
      </ButtonCreate>
    </Container>
  );
}
