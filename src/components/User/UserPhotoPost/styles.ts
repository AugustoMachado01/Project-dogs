import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form``;

export const FileInput = styled.input`
  margin-bottom: 1rem;
`;

export const Preview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: "";
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;
