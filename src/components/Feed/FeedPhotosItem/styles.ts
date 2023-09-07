import styled from "styled-components";
import Views from "../../../Assets/visualizacao.svg";

export const Li = styled.div`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
  }

  span {
    grid-area: 1/1;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    &::before {
      display: inline-block;
      width: 16px;
      height: 10px;
      margin-right: 0.25rem;
      content: "";
      background: url(${Views}) no-repeat center center;
      background-size: cover;
    }
  }

  &:hover span {
    display: flex;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

export const Span = styled.span``;
