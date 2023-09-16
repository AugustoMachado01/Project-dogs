import React from "react";
import { Ul } from "./styles";

import { CommentPhoto } from "../../../Hooks/useFetch";
import { UserContext } from "../../../UserContext";
import { PhotoCommentsForm } from "../PhotoCommentsForm";

interface PhotoCommentProps {
  id: number;
  comments: CommentPhoto[];
}

export function PhotoComment({ id, comments }: PhotoCommentProps) {
  const [comment, setComments] = React.useState(() => comments);
  const commentsSection = React.useRef<HTMLUListElement | null>(null);

  const userContext = React.useContext(UserContext);

  if (!userContext) throw new Error("invalid error!");

  const { login } = userContext;

  React.useEffect(() => {
    const currentSection = commentsSection.current;
    if (currentSection) {
      currentSection.scrollTop = currentSection.scrollHeight;
    }
  }, [comment]);

  return (
    <>
      <Ul ref={commentsSection}>
        {comment.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </Ul>
      {login && <PhotoCommentsForm id={id} setComments={setComments} />}
    </>
  );
}
