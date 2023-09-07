import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section``;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const ButtonCreate = styled(LinkRouter)``;

export const LinkLost = styled(LinkRouter)`
  display: inline-block;
  color: #666;

  padding: 0.5rem;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: currentColor;
    display: block;
  }
`;

export const Register = styled.div`
  margin-top: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;

  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 0.5rem;
    background: #ddd;
    border-radius: 0.2rem;
  }
`;
