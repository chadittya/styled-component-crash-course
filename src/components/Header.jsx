import { Button } from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Hunddle re-imagines the way we build communities. You have a
              voice, but so does your audience. Create connections with your
              users as you enggage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
