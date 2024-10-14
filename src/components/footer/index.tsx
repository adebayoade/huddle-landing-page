import Stack from '../ui/stack';
import Logo from '../ui/logo';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Community from '../../pages/home/community';
import { Copy, FooterSection, ContentWrapper } from './footer.styles';
import { Container } from '../../globalStyles';

export default function Footer() {
  return (
    <FooterSection>
      <Community />
      <Container>
        <Logo variant="white" />
        <ContentWrapper>
          <Stack spacing="30px" direction="column">
            <Stack spacing="20px">
              <img src="/icon-location.svg" alt="location icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
              </p>
            </Stack>

            <Stack alignItems="center" spacing="20px">
              <img src="/icon-phone.svg" alt="phone icon" />
              <a href="tel:+15431234567">+1-543-123-4567</a>
            </Stack>

            <Stack alignItems="center" spacing="20px">
              <img src="/icon-email.svg" alt="email icon" />
              <a href="mailto:example@huddle.com">example@huddle.com</a>
            </Stack>
          </Stack>

          <Stack direction="column" spacing="30px">
            <Link to="/">About Us</Link>
            <Link to="/">What We Do</Link>
            <Link to="/">FAQ</Link>
          </Stack>

          <Stack direction="column" spacing="30px">
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
        </ContentWrapper>

        <Copy>
          <Link to="mailto:me@adebayoade.com">me@adebayoade.com</Link>
          <br />
          <span>&copy; Copyright 2018 Huddle. All rights reserved.</span>
        </Copy>
      </Container>
    </FooterSection>
  );
}
