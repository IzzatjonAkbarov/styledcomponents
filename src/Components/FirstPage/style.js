import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;
  margin: 10px 0;
  width: 100%;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 80px;
  margin: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const DivAddToCart = styled.div`
  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.25;
    color: #212b36;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    padding: 0;
  }
`;

export const FlexStyle = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "16px"};
  align-items: ${(props) =>
    props.type === "center"
      ? "center"
      : props.type === "end"
      ? "end"
      : "start"};
  justify-content: ${(props) =>
    props.variant === "center"
      ? "center"
      : props.variant === "between"
      ? "space-between"
      : props.variant === "end"
      ? "flex-end"
      : "flex-start"};

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 0;
  }

  p {
    margin: 0;
  }
`;

export const Myp = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #637381;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    h1 {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      color: #000;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      width: 114px;
      height: 36px;

      @media (max-width: 480px) {
        width: 100px;
        gap: 10px;
      }

      span {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
        color: #000;

        @media (max-width: 480px) {
          font-size: 14px;
        }
      }

      button {
        font-size: 18px;
        background-color: transparent;
        border: none;
      }
    }
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 28px;
      line-height: 1.25;
      color: #000;
      margin: 0;

      @media (max-width: 480px) {
        font-size: 24px;
      }
    }

    p {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      text-align: right;
      color: #637381;
      margin: 0;
      padding-top: 5px;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }
`;

export const Product = styled.div`
  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: #212b36;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  div {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid #e7e7e7;

      @media (max-width: 480px) {
        gap: 10px;
      }

      p {
        margin: 0;
      }
    }
  }
`;

export const AddtoCart = styled.button`
  margin: 30px 0;
  border: none;
  width: 100%;
  border-radius: 5px;
  padding: 12px 15px;
  background: #a9358d;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

export const SelectSize = styled.div`
  margin-top: 20px;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: #212b36;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 480px) {
      flex-wrap: wrap;
      gap: 10px;
    }

    button {
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      padding: 8px 25px;
      width: 92px;
      height: 40px;
      background-color: ${(props) =>
        props.color === "selected" ? "#a9358d" : "#fff"};
      color: ${(props) => (props.color === "selected" ? "#fff" : "#000")};
    }
  }
`;

function getthecolor(color) {
  switch (color) {
    case "red":
      return "background-color: red;";
    case "blue":
      return "background-color: blue;";
    case "green":
      return "background-color: green;";
    case "yellow":
      return "background-color: yellow;";
    default:
      return "background-color: gray;";
  }
}

export const ChooseColor = styled.div`
  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: #212b36;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  button {
    border-radius: 4px;
    border: none;
    width: 40px;
    height: 40px;
    background: ${(props) => getthecolor(props.color)};

    @media (max-width: 480px) {
      width: 35px;
      height: 35px;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 480px) {
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;
