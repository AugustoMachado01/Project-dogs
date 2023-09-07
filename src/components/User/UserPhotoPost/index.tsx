import React, { useEffect, useState } from "react";
import { Container, Form, Preview, FileInput } from "./styles";
import { Input } from "../../Forms/Input";
import { Button } from "../../Forms/Button";
import { useForm } from "../../../Hooks/useForm";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTO_POST } from "../../../Hooks/api";
import { ErrorComponent } from "../../Helper";
import { useNavigate } from "react-router-dom";

export function UserPhotoPost() {
  const name = useForm();
  const weight = useForm({ type: "number" });
  const age = useForm({ type: "number" });

  const [img, setImg] = React.useState<{ preview: string; raw: File } | null>(
    null
  );

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();

    if (img) {
      formData.append("img", img.raw);
    }

    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    console.log(formData);

    const token = window.localStorage.getItem("token");

    if (token) {
      const { url, options } = PHOTO_POST(formData, token);

      await request({ url, options });
    }
  }
  function handleImgChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setImg({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0],
      });
    }
  }

  return (
    <Container className="animeLeft">
      <Form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="Peso" type="text" name="weight" {...weight} />
        <Input label="Idade" type="text" name="age" {...age} />
        <FileInput type="file" onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {error && <ErrorComponent error={error} />}
      </Form>
      <div>
        {img?.preview && (
          <Preview style={{ backgroundImage: `url(${img.preview})` }}></Preview>
        )}
      </div>
    </Container>
  );
}
