import styled from 'styled-components';

export const HuddleLogo = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})`
  width: 240px;
  height: 39px;

  @media (max-width: 768px) {
    width: 170px;
    height: auto;
  }
`;
