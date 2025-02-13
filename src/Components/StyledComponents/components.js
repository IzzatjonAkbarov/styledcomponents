import styled from "styled-components";

export const Button = styled.button`
  /* props */
  background-color: ${(props) => (props.isPrimary ? "blue" : "red")};
  border-radius: ${(props) => (props.isPrimary ? "none" : "30px")};
  border: ${(props) =>
    props.isDashedBorder ? "3px solid black" : "3px dashed black"};
  margin: 0px 10px;
  padding: 10px;
  width: 200px;
  height: 50px;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: green;
  }
  transition: 0.3s all;
`;

//Button

export const MyInput = styled.input`
  width: 50%;
  outline: none;
  margin: auto;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: aliceblue;
  font-size: 16px;

  &::placeholder {
    color: #000;
  }

  &:focus {
    border-color: #007bff;
  }
`;
//Input
export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};

  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;

export const Containerforcomponents = styled.div`
  width: 95%;

  margin: auto;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? props.columns : "repeat(3, 1fr)"};
  grid-gap: ${(props) => (props.gap ? props.gap : "10px")};
  padding: ${(props) => (props.padding ? props.padding : "10px")};
`;
export const Select = styled.select`
  width: 60%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #888;
  border-radius: 8px;
  background-color: #f0f0f0;
  font-size: 18px;

  &:focus {
    border-color: #0056b3;
    background-color: #e6f7ff;
  }
`;

export const Option = styled.option`
  padding: 8px;
  font-size: 18px;
  background-color: #fff;
`;
export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: max-content;
  height: auto;
`;

export const CardContent = styled.div`
  padding: 15px;
  width: 200px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5em;
  margin: 0 0 10px;
`;

export const CardDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin: 0 0 15px;
`;

export const CardPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const CardButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;
