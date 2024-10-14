import Stack from '../../../components/ui/stack';
import Button from '../../../components/ui/button';
import { CommunityContainer } from './community.styles';
import { SecondTitle } from '../../../globalStyles';

export default function Community() {
  return (
    <CommunityContainer>
      <Stack direction="column" spacing="25px">
        <SecondTitle>Ready To Build Your Community</SecondTitle>
        <Button>Get Started For Free</Button>
      </Stack>
    </CommunityContainer>
  );
}
