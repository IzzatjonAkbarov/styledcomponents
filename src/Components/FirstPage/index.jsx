import {
  AddtoCart,
  ChooseColor,
  Container,
  DivAddToCart,
  DivContainer,
  Flex,
  FlexStyle,
  Myp,
  Price,
  Product,
  SelectSize,
} from "./style";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import starpng from "../../assets/images/star.png";
import tick from "../../assets/icons/tick.svg";

const FirstPage = () => {
  return (
    <Container>
      <br />
      <DivContainer>
        <div>
          <img style={{ width: "520px" }} src={image1} alt="" />
          <Flex>
            <img style={{ width: "153px" }} src={image2} alt="" />
            <img style={{ width: "153px" }} src={image3} alt="" />
            <img style={{ width: "153px" }} src={image4} alt="" />
          </Flex>
        </div>

        <DivAddToCart>
          <h2>Men's Regular T-shirt</h2>
          <FlexStyle gap="100px">
            <FlexStyle gap="10px" type="center">
              <img src={starpng} alt="" />
              <p>5.00 Rating</p>
            </FlexStyle>
            <FlexStyle gap="10px" type="center">
              <img src={tick} alt="" />

              <p>In Stock</p>
            </FlexStyle>
          </FlexStyle>
          <Myp>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            erat quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod
            quis.
          </Myp>

          <Price>
            <div>
              <h1>Quantity</h1>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <span>
              <h1>$29.00</h1>
              <p>+12% VAT Added</p>
            </span>
          </Price>
          <AddtoCart>Add to Cart</AddtoCart>
          <Product>
            <h1>Product Details</h1>

            <div>
              <div>
                <p>Size</p>
                <p>Small, Medium, Large</p>
              </div>
              <div>
                <p>Color</p>
                <p>White, Black, Gray</p>
              </div>
              <div>
                <p>Brand</p>
                <p>Shirt Flex</p>
              </div>
            </div>
          </Product>

          <SelectSize>
            <h1>Select Size</h1>
            <div>
              <button>Small</button>
              <button color="selected">Medium</button>
              <button>Large</button>
            </div>
          </SelectSize>
          <ChooseColor>
            <h1>Choose Color</h1>

            <div>
              <button style={{ backgroundColor: "red" }}></button>
              <button style={{ backgroundColor: "blue" }}></button>
              <button style={{ backgroundColor: "green" }}></button>
              <button style={{ backgroundColor: "aqua" }}></button>
            </div>
          </ChooseColor>
        </DivAddToCart>
      </DivContainer>
    </Container>
  );
};

export default FirstPage;
