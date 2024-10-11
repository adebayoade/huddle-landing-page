import styled from 'styled-components';

export const Footer = styled.footer`
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

export const Section = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
  /* padding: 20px 0; */
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
`;

export const Copy = styled.div`
  width: 100%;
  margin-left: auto;
  margin-top: 50px;
  text-align: right;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;
