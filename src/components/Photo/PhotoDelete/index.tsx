import React from "react";
import { Button } from "./styles";
import { PHOTO_DELETE } from "../../../Hooks/api";
import { useFetch } from "../../../Hooks/useFetch";

interface IdProps {
  id: number;
}

export function PhotoDelete({ id }: IdProps) {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tens certeza que deseja deletar a foto ?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);

      const { response } = await request({ url, options });

      if (response?.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <Button disabled>Deletando...</Button>
      ) : (
        <Button onClick={handleClick}>Deletar</Button>
      )}
    </>
  );
}
