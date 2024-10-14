import Stack from '../../../components/ui/stack';
import Button from '../../../components/ui/button';
import { HeroContainer, HeroSection, HeroImg, ContentWrapper } from './hero.styles';
import { Title } from '../../../globalStyles';

export default function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <ContentWrapper>
          <Stack direction="column" spacing="30px">
            <Title>
              Build The Community
              <br />
              Your Fans Will Love
            </Title>

            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your
              audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Button>Get Started For Free</Button>
          </Stack>

          <HeroImg src="/illustration-mockups.svg" alt="illustration icon" />
        </ContentWrapper>
      </HeroContainer>
    </HeroSection>
  );
}
