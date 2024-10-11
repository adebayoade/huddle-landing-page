import styled from 'styled-components';
import { StyledCard } from '../../../components/styles/card';
import Stack from '../../../components/stack';
import Button from '../../../components/ui/button';

const StyledCommunity = styled(StyledCard)`
  background-color: white;
  z-index: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 0;
  border-radius: 20px;
  left: 0;
  right: 0;
  margin: -150px auto 0 auto;

  h2 {
    text-align: center;
    color: black;
  }

  button {
    width: max-content;
    margin: auto;
  }

  @media (max-width: 1024px) {
    margin: -100px auto 0 auto;

    h2 {
      font-size: 20px;
    }
  }
`;

export default function Community() {
  return (
    <StyledCommunity>
      <Stack direction="column" spacing="30px">
        <h2>Ready To Build Your Community</h2>
        <Button>Get Started For Free</Button>
      </Stack>
    </StyledCommunity>
  );
}
