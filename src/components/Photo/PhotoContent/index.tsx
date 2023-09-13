import React from "react";
import {
  Container,
  Content,
  Img,
  Details,
  Paragraph,
  Link,
  Views,
  Title,
  Attributes,
} from "./styles";
import { PhotoCommentProps } from "../../../Hooks/useFetch";
import { PhotoComment } from "../PhotoComment";

interface DataItemProps {
  data: PhotoCommentProps;
}

export function PhotoContent({ data }: DataItemProps) {
  const { photo, comments } = data;

  return (
    <Container>
      <Content>
        <Img src={photo.src} alt={photo.title} />
      </Content>
      <Details>
        <Paragraph>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
