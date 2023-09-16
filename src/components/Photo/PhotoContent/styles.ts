import { Link as CustomLink } from "react-router-dom";
import styled from "styled-components";

import ViewsPhoto from "../../../Assets/visualizacao-black.svg";

export const Container = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 54rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    img {
      grid-row: 1;
    }
  }
`;

export const Content = styled.div``;

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const Paragraph = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    text-decoration: underline;
  }
`;

export const Link = styled(CustomLink)``;

export const Views = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5px;
    background: url(${ViewsPhoto}) no-repeat center center;
    background-size: cover;
  }
`;

export const Title = styled.h1``;

export const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li {
    margin-right: 2rem;

    &::before {
      content: "";
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: #333;
      margin-top: 5px;
    }
  }
`;
