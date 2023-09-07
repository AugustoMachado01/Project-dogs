import React, { useContext } from "react";
import { Container, Form } from "./styles";
import { Title } from "../../Forms/Title";
import { Input } from "../../Forms/Input";
import { Button } from "../../Forms/Button";
import { useForm } from "../../../Hooks/useForm";
import { USER_POST } from "../../../Hooks/api";
import { UserContext } from "../../../UserContext";
import { useFetch } from "../../../Hooks/useFetch";
import { ErrorComponent } from "../../Helper";

export function LoginCreate() {
  const username = useForm();
  const email = useForm({ type: "email" });
  const password = useForm({ type: "password" });

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext not provided!");
  }

  const { userLogin } = userContext;
  const { loading, error, request } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = USER_POST(
      username.value,
      email.value,
      password.value
    );

    const { response } = await request({ url, options });

    if (response && response.ok) userLogin(username.value, password.value);
  }

  return (
    <Container>
      <Title title="Cadastra-se" />
      <Form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <ErrorComponent error={error} />}
      </Form>
    </Container>
  );
}
