import styled from 'styled-components';
import Navbar from '../../../components/navbar';
import Stack from '../../../components/stack';
import Button from '../../../components/button';

const Header = styled.header`
  background-image: url('/public/bg-hero-desktop.svg');
`;

const Container = styled.div`
  background-image: url('/public/bg-hero-desktop.svg');
  height: 650px;
  margin: auto;
  max-width: 1366px;

  button {
    width: max-content;
  }
`;

const Section = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 650px;
  justify-content: 'space-between';
  align-items: center;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  max-width: 650px;
  alt: 'illustration';
  margin-left: auto;
`;

export default function Hero() {
  return (
    <Header>
      <Container>
        <Navbar />

        <Section>
          <Stack direction="column" spacing="5px">
            <h1>Build The Community Your Fans Will Love</h1>
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
