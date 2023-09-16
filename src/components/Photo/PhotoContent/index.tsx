import React from "react";
import {
  Container,
  Content,
  Details,
  Paragraph,
  Link,
  Views,
  Title,
  Attributes,
} from "./styles";
import { PhotoCommentProps } from "../../../Hooks/useFetch";
import { PhotoComment } from "../PhotoComment";
import { UserContext } from "../../../UserContext";
import { PhotoDelete } from "../PhotoDelete";
import { Image } from "../../Helper/Image";

interface DataItemProps {
  data: PhotoCommentProps;
}

export function PhotoContent({ data }: DataItemProps) {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <Container>
      <Content>
        <Image src={photo.src} alt={photo.title} />
      </Content>
      <Details>
        <Paragraph>
          {user?.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}

          <Views>{photo.acessos}</Views>
        </Paragraph>
        <Title className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </Title>
        <Attributes>
          <li>{photo.peso} kg</li>
          <li>{photo.idade} anos</li>
        </Attributes>
        <PhotoComment id={photo.id} comments={comments} />
      </Details>
    </Container>
  );
}
