import React, { createContext, ReactNode } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./Hooks/api";
import { useNavigate } from "react-router-dom";

interface DataItemProps {
  id: number;
  username: string;
  nome: string;
  email: string;
}

interface UserContextType {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogOut: () => Promise<void>;
  data: DataItemProps | null;
  login: boolean | null;
  loading: boolean;
  error: string | null;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserStorageProps {
  children: ReactNode;
}

export function UserStorage({ children }: UserStorageProps) {
  const [data, setData] = React.useState<DataItemProps | null>(null);
  const [login, setLogin] = React.useState<boolean | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const navigate = useNavigate();

  const userLogOut = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);

    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST(username, password);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Usuário inválido`);
      const { token } = await response.json();

      window.localStorage.setItem("token", token);

      await getUser(token);
      navigate("/conta");
    } catch (error: any) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);

          const response = await fetch(url, options);

          if (!response.ok) throw new Error(`Error: ${response.statusText}`);

          await getUser(token);
        } catch (error) {
          userLogOut();
        } finally {
          setLoading(true);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, [userLogOut]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogOut, data, login, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
}
