import React from "react";
import { Container, Skeletom, Img } from "./styles";

interface ImageProps {
  alt: string;
  src: string;
}

export function Image({ alt, src }: ImageProps) {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    setSkeleton(false);
    event.currentTarget.style.opacity = "1";
  }
  return (
    <Container>
      {skeleton && <Skeletom></Skeletom>}
      <Img onLoad={handleLoad} alt={alt} src={src} />
    </Container>
  );
}
