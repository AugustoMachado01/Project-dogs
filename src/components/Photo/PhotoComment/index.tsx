import React from "react";
import { Container } from "./styles";

import { CommentPhoto } from "../../../Hooks/useFetch";
import { UserContext } from "../../../UserContext";
import { PhotoCommentsForm } from "../PhotoCommentsForm";

interface PhotoCommentProps {
  id: number;
  comments: CommentPhoto[];
}

export function PhotoComment({ id, comments }: PhotoCommentProps) {
  const userContext = React.useContext(UserContext);

  if (!userContext) throw new Error("invalid error!");

  const { login } = userContext;

  return <Container>{login && <PhotoCommentsForm />}</Container>;
}
