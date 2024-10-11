import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 200px;
  height: 100px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 130px;
  }
`;

export default function Logo() {
  return <StyledLogo src="/public/logo.svg" />;
}
