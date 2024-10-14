import Button from '../ui/button';
import Logo from '../ui/logo';
import { NavContainer, NavSection } from './navbar.styles';

export default function Navbar() {
  return (
    <NavSection>
      <NavContainer>
        <Logo />
        <Button variant="outlined">Try it Free</Button>
      </NavContainer>
    </NavSection>
  );
}
