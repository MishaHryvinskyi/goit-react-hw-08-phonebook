import { Container, Title, Link, ContainerBook } from './Home.styled';
import { PiCheckFatBold, PiAddressBookBold } from "react-icons/pi";

export default function Home() {
  return (
    <Container>
      <Title>Welcome to your Phonebook!</Title>
      <ContainerBook>
        <PiAddressBookBold 
          style={{ color: '#113f67'}} 
          size={300}
        />
      </ContainerBook>
      <Link to="/login" title="Try it now!">
        Try it now! <PiCheckFatBold />
      </Link>
    </Container>
  );
}