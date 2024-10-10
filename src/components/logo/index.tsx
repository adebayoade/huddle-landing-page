import styled from 'styled-components';

// export const Logo = styled.img.attrs({
//   src: '/public/vite.svg',
// });

// export const Logo = styled.h1`
//   font-size: 28px;
//   font-weight: 800;
//   flex: 1;
//   color: ${props => props.theme.colors.primary};
// `;

const StyledLogo = styled.img`
  width: 200px;
  height: 100px;
  object-fit: contain;
`;

export default function Logo() {
  return <StyledLogo src="/public/logo.svg" />;
}
