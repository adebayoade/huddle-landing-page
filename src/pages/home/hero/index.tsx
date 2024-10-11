import Navbar from '../../../components/navbar';
import Stack from '../../../components/ui/stack';
import Button from '../../../components/ui/button';
import { HeroContainer, Header, HeroImg, Section } from './hero.styles';

export default function Hero() {
  return (
    <Header>
      <HeroContainer>
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
      </HeroContainer>
    </Header>
  );
}
