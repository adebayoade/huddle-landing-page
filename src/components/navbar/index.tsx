import Button from '../ui/button';
import Logo from '../ui/logo';
import { NavContainer } from './navbar.styles';

export default function Navbar() {
  return (
    <NavContainer>
      <Logo />
      <Button variant="outlined">Try it Free</Button>
    </NavContainer>
  );
}
