import styled from 'styled-components';

export const NavSection = styled.nav`
  background-color: ${({ theme }) => theme.colors.paleCyan};
`;
export const NavContainer = styled.div`
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
