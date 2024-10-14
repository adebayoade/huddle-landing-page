import styled from 'styled-components';

type BenefitsWrapperProps = {
  direction?: string;
};

export const BenefitsContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: ${({ theme }) => theme.container.width};
  margin: auto;
  margin-top: 20px;
  margin-bottom: 250px;
  padding: 20px;
`;

export const BenefitsWrapper = styled.div<BenefitsWrapperProps>`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  flex-direction: ${props => props.direction};

  span {
    line-height: 1.5;
    color: #9ca3af;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    flex-direction: column;

    h2,
    span {
      text-align: center;
    }
  }

  & > div {
    flex: 1;
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
