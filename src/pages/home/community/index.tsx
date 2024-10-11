import Stack from '../../../components/ui/stack';
import Button from '../../../components/ui/button';
import { CommunityContainer } from './community.styles';

export default function Community() {
  return (
    <CommunityContainer>
      <Stack direction="column" spacing="30px">
        <h2>Ready To Build Your Community</h2>
        <Button>Get Started For Free</Button>
      </Stack>
    </CommunityContainer>
  );
}
