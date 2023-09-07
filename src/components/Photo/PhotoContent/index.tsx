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
  Ul,
} from "./styles";
import { PhotoCommentProps } from "../../../Hooks/useFetch";

interface DataItemProps {
  data: PhotoCommentProps;
}

export function PhotoContent({ data }: DataItemProps) {
  const { photo, comments } = data;
  console.log(photo);

  return (
    <Container>
      <Content>
        <Img src={photo.src} alt={photo.title} />
      </Content>
      <Details>
        <Paragraph>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <Views>@{photo.acessos}</Views>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <Ul>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </Ul>
        </Paragraph>
      </Details>
      <PhotoComment id={photo.id} comments={ } />
    </Container>
  );
}
