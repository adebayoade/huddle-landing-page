import styled from 'styled-components';

import Button from '../button';
import Logo from '../logo';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  /* width: 1366px; */
  justify-content: space-between;
  /* margin: auto; */
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Logo />

      <Button variant="outlined">Try it Free</Button>
    </NavContainer>
  );
}
