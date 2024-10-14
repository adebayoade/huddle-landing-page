import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-image: url('/bg-hero-desktop.svg');
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;
  margin: auto;
  max-width: ${({ theme }) => theme.container.width};

  button {
    width: max-content;
  }
`;
