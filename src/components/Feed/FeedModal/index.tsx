import React from "react";
import { Modal } from "./styles";
import { PhotoCommentProps, useFetch } from "../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../Hooks/api";

import { DataProps } from "../FeedPhotos";
import { ErrorComponent } from "../../Helper";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../../Photo/PhotoContent";

interface ModalPhotoProps {
  photo: DataProps;
}

export function FeedModal({ photo }: ModalPhotoProps) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPModal() {
      const { url, options } = PHOTO_GET(photo.id);
      await request({ url, options });
    }
    fetchPModal();
  }, [photo, request]);

  return (
    <Modal>
      {error && <ErrorComponent error={error} />}
      {loading && <Loading />}

      {data !== null && !Array.isArray(data) && <PhotoContent data={data} />}
    </Modal>
  );
}
