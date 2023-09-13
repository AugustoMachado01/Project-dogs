import React from "react";
import { Modal } from "./styles";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../Hooks/api";

import { DataProps } from "../FeedPhotos";
import { ErrorComponent } from "../../Helper";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../../Photo/PhotoContent";

interface ModalPhotoProps {
  photo: DataProps;
  setModalPhoto: (photo: DataProps | null) => void;
}

export function FeedModal({ photo, setModalPhoto }: ModalPhotoProps) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPModal() {
      const { url, options } = PHOTO_GET(photo.id);
      await request({ url, options });
    }
    fetchPModal();
  }, [photo, request]);

  function handleOutsideClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <Modal onClick={handleOutsideClick}>
      {error && <ErrorComponent error={error} />}
      {loading && <Loading />}

      {data !== null && !Array.isArray(data) && <PhotoContent data={data} />}
    </Modal>
  );
}
