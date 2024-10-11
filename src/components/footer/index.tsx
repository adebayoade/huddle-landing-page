import styled from 'styled-components';
import Stack from '../stack';
import Logo from '../ui/logo';
import { Container } from '../styles/container';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Community from '../../pages/home/community';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkCyan};
  padding: 150px 0 40px 0;
  color: #ffff;
  position: relative;

  img {
    width: 15px;
    height: 15px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  .fab {
    border-radius: 9999px;
    border: white;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
`;

const Copy = styled.div`
  width: 100%;
  margin-left: auto;
  margin-top: 50px;
  text-align: right;
  font-size: 14px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Community />
      <Container>
        <Logo />
        <Wrapper>
          <Stack spacing="30px" direction="column">
            {/* <div> */}

            {/* </div> */}

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
