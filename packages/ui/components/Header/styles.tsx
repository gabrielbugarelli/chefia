import { styled } from "styled-components"

export const Container = styled.header`
  background-color: #D73035;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Content = styled.section`
  display: flex;

  width: 100%;
  max-width: 1216px;
  align-items: center;
  justify-content: space-between;


  .page-details {
    h1 {
      color: #fff;
      font-size: 2.5rem;
    }

    h2 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: normal;

      margin-top: 6px;
    }
  }
`;
