import React from "react";
import { Li, Span } from "./styles";

import { DataProps } from "../FeedPhotos";

interface DataItem {
  photo: DataProps;
  setModalPhoto: (photo: DataProps) => void;
}

export function FeedPhotosItem({ photo, setModalPhoto }: DataItem) {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <Li onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <Span>{photo.acessos}</Span>
    </Li>
  );
}
