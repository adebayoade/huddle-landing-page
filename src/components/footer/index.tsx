import Stack from '../ui/stack';
import Logo from '../ui/logo';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Community from '../../pages/home/community';
import { Copy, Footer as StyledFooter, Wrapper } from './footer.styles';
import Container from '../ui/container';

export default function Footer() {
  return (
    <StyledFooter>
      <Community />
      <Container>
        <Logo />
        <Wrapper>
          <Stack spacing="30px" direction="column">
            <Stack spacing="20px">
              <img src="/icon-location.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
              </p>
            </Stack>

            <Stack alignItems="center" spacing="20px">
              <img src="/icon-phone.svg" alt="" />
              <a href="tel:+15431234567">+1-543-123-4567</a>
            </Stack>

            <Stack alignItems="center" spacing="20px">
              <img src="/icon-email.svg" alt="" />
              <a href="mailto:example@huddle.com">example@huddle.com</a>
            </Stack>
          </Stack>

          <Stack direction="column" spacing="20px">
            <Link to="/">About Us</Link>
            <Link to="/">What We Do</Link>
            <Link to="/">FAQ</Link>
          </Stack>

          <Stack direction="column" spacing="20px">
            <Link to="/">Career</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact Us</Link>
          </Stack>

          <Stack spacing="20px">
            <Link to="/">
              <FaFacebook size={25} />
            </Link>

            <Link to="/">
              <FaTwitter size={25} />
            </Link>

            <Link to="/">
              <FaInstagram size={25} />
            </Link>
          </Stack>
        </Wrapper>

        <Copy>
          <span>&copy; Copyright 2018 Huddle. All rights reserved.</span>
        </Copy>
      </Container>
    </StyledFooter>
  );
}
