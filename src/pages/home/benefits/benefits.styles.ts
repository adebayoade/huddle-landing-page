import styled from 'styled-components';

type BenefitWrapperProps = {
  direction?: string;
};

export const BenefitContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: ${({ theme }) => theme.container.width};
  margin: auto;
  margin-top: 20px;
  margin-bottom: 250px;
  padding: 20px;
`;

export const BenefitWrapper = styled.div<BenefitWrapperProps>`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  flex-direction: ${props => props.direction};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    flex-direction: column;

    h1 {
      font-size: 20px;
    }

    h1,
    p {
      text-align: center;
    }
  }

  & > div {
    flex: 1;
  }

  p {
    color: #9ca3af;
  }
`;

export const BenefitImg = styled.img`
  width: 80%;
  /* max-width: 500px;
  margin-left: auto; */

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;
