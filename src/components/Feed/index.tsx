import React from "react";
import { Container } from "./styles";
import { FeedPhotos } from "./FeedPhotos";
import { FeedModal } from "./FeedModal";

import { DataProps } from "./FeedPhotos";

export function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState<DataProps | null>(null);
  return (
    <Container>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </Container>
  );
}
