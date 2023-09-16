import React from "react";
import { Container, Ul } from "./styles";
import { FeedPhotosItem } from "../FeedPhotosItem";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../Hooks/api";
import { ErrorComponent } from "../../Helper";
import { Loading } from "../../Helper/Loading/index";

export interface DataProps {
  acessos: string;
  author: string;
  date: string;
  id: string;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total: string;
}

interface FeedPhotosProps {
  setModalPhoto: (photo: DataProps | null) => void;
}
export function FeedPhotos({ setModalPhoto }: FeedPhotosProps) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      await request({ url, options });
    }
    fetchPhotos();
  }, [request]);

  if (error) return <ErrorComponent error={error} />;
  if (loading) return <Loading />;
  if (data instanceof Array)
    return (
      <Container>
        <Ul className="animeLeft">
          {data.map((photo: DataProps) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </Ul>
      </Container>
    );
  else return null;
}
