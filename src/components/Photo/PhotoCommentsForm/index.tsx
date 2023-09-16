import React from "react";
import { Button, Form, Textarea } from "./styles";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import { CommentPhoto, useFetch } from "../../../Hooks/useFetch";
import { COMMENT_POST } from "../../../Hooks/api";
import { ErrorComponent } from "../../Helper";

interface IdProps {
  id: number;
  setComments: React.Dispatch<React.SetStateAction<CommentPhoto[]>>;
}
export function PhotoCommentsForm({ id, setComments }: IdProps) {
  const { request, error } = useFetch();
  const [commentText, setCommentText] = React.useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, commentText);
    const { response, json } = await request({ url, options });

    if (response?.ok) {
      setComments((prevComments) => {
        if (json) {
          return [...prevComments, json];
        } else {
          return prevComments;
        }
      });
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={commentText}
        onChange={({ target }) => setCommentText(target.value)}
      />
      <Button>
        <Enviar />
      </Button>
      <ErrorComponent error={error} />
    </Form>
  );
}
