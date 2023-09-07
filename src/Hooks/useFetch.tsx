import React from "react";
import { DataProps } from "../components/Feed/FeedPhotos";

interface OptionOneProps {
  method: string;
  headers: { "Content-Type": string };
  body: string;
}

interface OptionTwoProps {
  method: string;
  headers: { Authorization: string };
  body: FormData;
}

export interface OptionThreeProps extends RequestInit {
  method: string;
  cache?: RequestCache;
}

export interface ApiResponse<T> {
  response: Response;
  json: T;
}

interface CommentPhoto {
  comment_ID: string;
  comment_agent: string;
  comment_approved: string;
  comment_author: string;
  comment_author_IP: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_content: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_karma: string;
  comment_parent: string;
  comment_post_ID: string;
  comment_type: string;
  user_id: string;
}

export interface PhotoCommentProps {
  photo: {
    id: number;
    author: string;
    title: string;
    date: string;
    src: string;
    acessos: string;
    peso: string;
    idade: string;
  };
  comments: CommentPhoto[];
}

export function useFetch() {
  const [data, setData] = React.useState<
    DataProps[] | PhotoCommentProps | null
  >(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(
    async ({
      url,
      options,
    }: {
      url: string;
      options: OptionOneProps | OptionTwoProps | OptionThreeProps;
    }) => {
      let response;
      let json;

      try {
        setError(null);
        setLoading(true);

        response = await fetch(url, options);
        json = await response.json();

        if (!response.ok) throw new Error(json.message);
      } catch (error: any) {
        json = null;
        setError(error.message);
      } finally {
        setLoading(false);
        setData(json);

        return { response, json };
      }
    },
    []
  );

  return {
    request,
    data,
    error,
    loading,
  };
}
