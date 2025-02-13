import React from "react";
import {
  Button,
  CardButton,
  CardContent,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
  Containerforcomponents,
  FlexContainer,
  GridContainer,
  MyInput,
  Select,
} from "./components";
import image1 from "../../assets/images/card4.jpg";
const StyledComponents = () => {
  return (
    <Containerforcomponents>
      <FlexContainer justifyContent="start" alignItems="end">
        <br />
        <Button isPrimary isDashedBorder>
          hello world
        </Button>
        <br />
        <Button variant>hello world</Button>
      </FlexContainer>

      <br />
      <MyInput placeholder="write your name" />
      <br />
      <br />
      <GridContainer columns="1fr 1fr 1fr 1fr">
        <h1>home</h1>
        <h1>about</h1>
        <h1>contact</h1>
        <h1>Faq</h1>
      </GridContainer>

      <Select>
        <option value="">sldkfmoskmdfo</option>
        <option value="">sldkfmoskmdfo</option>
        <option value="">sldkfmoskmdfo</option>
        <option value="">sldkfmoskmdfo</option>
      </Select>
      <div>
        <CardImage src={image1} alt="Product Image" />
        <CardContent>
          <CardTitle>Product Title</CardTitle>
          <CardDescription>
            This is a brief description of the product.
          </CardDescription>
          <CardPrice>$19.99</CardPrice>
          <CardButton isPrimary>Add to Cart</CardButton>
        </CardContent>
      </div>
    </Containerforcomponents>
  );
};

export default StyledComponents;
