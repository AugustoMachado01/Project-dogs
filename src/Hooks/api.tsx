export const API_URL = "https://dogsapi.origamid.dev/json";

interface TokenPostBody {
  username: string;
  password: string;
}

interface PhotoGetProps {
  page: number;
  total: number;
  user: number;
}

interface CommentProps {
  comment: string;
}

export function TOKEN_POST(username: string, password: string) {
  const body: TokenPostBody = {
    username,
    password,
  };
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token: string) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(username: string, email: string, password: string) {
  const body = {
    username,
    email,
    password,
  };

  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData: FormData, token: string) {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }: PhotoGetProps) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store" as RequestCache,
    },
  };
}

export function PHOTO_GET(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store" as RequestCache,
    },
  };
}

export function COMMENT_POST(id: number, comment: string) {
  const body: CommentProps = {
    comment,
  };
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_DELETE(id: number) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
