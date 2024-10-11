import styled from 'styled-components';
import Navbar from '../../../components/navbar';
import Stack from '../../../components/stack';
import Button from '../../../components/ui/button';

const Header = styled.header`
  background-image: url('/public/bg-hero-desktop.svg');
`;

const Container = styled.div`
  background-image: url('/public/bg-hero-desktop.svg');
  height: 650px;
  margin: auto;
  max-width: ${({ theme }) => theme.container.width};
  padding: 20px;

  button {
    width: max-content;
  }

  @media (max-width: 1024px) {
    height: unset;
  }
`;

const Section = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 750px;
  justify-content: 'space-between';
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 50px;
    margin: 0;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-weight: 600;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const HeroImg = styled.img`
  width: 100%;
  alt: 'illustration';
  margin-left: auto;
`;

export default function Hero() {
  return (
    <Header>
      <Container>
        <Navbar />

        <Section>
          <Stack direction="column" spacing="30px">
            <h1>
              Build The Community
              <br />
              Your Fans Will Love
            </h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your
              audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Button>Get Started For Free</Button>
          </Stack>

          <HeroImg src="/public/illustration-mockups.svg" />
        </Section>
      </Container>
    </Header>
  );
}
