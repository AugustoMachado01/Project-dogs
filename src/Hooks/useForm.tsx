import React, { ChangeEvent } from "react";

const types = {
  email: {
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter um caracter maíusculo, um minúsculo um digitos e no mínimo 8 caracteres",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas",
  },
};

type FormType = keyof typeof types;

interface DefaultFormProps {
  type?: FormType;
}

export function useForm({ type }: DefaultFormProps = {}) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(value: string) {
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (type && types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }
    setError("");
    return true;
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setValue(value);
    if (error) {
      validate(value);
    }
  }

  function onBlur(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    validate(value);
  }
  return {
    value,
    onChange,
    error,
    validate,
    onBlur,
  };
}
