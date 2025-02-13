import styled from "styled-components";

export const Mycard = styled.div`
  display: grid;
  width: 90%;
  margin: auto;

  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  div {
    img {
      width: 100%;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: fit-content;
      gap: 40px;

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0px;
      }

      h1 {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 1.25;
        color: #212b36;
        margin: 0;

        @media (max-width: 480px) {
          font-size: 20px;
          padding: 0;
        }
      }

      p {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
        text-align: right;
        color: #637381;
        padding: 0 !important;

        @media (max-width: 480px) {
          font-size: 14px;
          padding: 0 !important;
        }
        img {
          width: auto;
        }
      }
    }

    h3 {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 1.3;
      color: #212b36;
      margin: 0;
      padding: 0 !important;

      @media (max-width: 480px) {
        font-size: 18px;
        padding: 0 !important;
      }
    }
  }
`;
