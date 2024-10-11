import styled from 'styled-components';
import Stack from '../../../components/stack';
import { StyledCard } from '../../../components/styles/card';
import { BENEFITS } from '../../../constants/benefits';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  max-width: ${({ theme }) => theme.container.width};
  margin: auto;
  margin-top: 20px;
  margin-bottom: 250px;
  padding: 20px;
`;

type BenefitWrapperProps = {
  direction?: string;
};

const BenefitWrapper = styled.div<BenefitWrapperProps>`
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

const BenefitImg = styled.img`
  width: 80%;
  /* max-width: 500px;
  margin-left: auto; */

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export default function Benefits() {
  return (
    <Wrapper>
      <Stack spacing="30px" direction="column">
        {BENEFITS.map(benefit => (
          <StyledCard key={benefit.id}>
            <BenefitWrapper direction={benefit.id === 2 ? 'row-reverse' : 'row'}>
              <Stack spacing="20px" direction="column">
                <h1>{benefit.title}</h1>
                <p>{benefit.body}</p>
              </Stack>

              <div>
                <BenefitImg alt="illustration" src={benefit.image} />
              </div>
            </BenefitWrapper>
          </StyledCard>
        ))}
      </Stack>
    </Wrapper>
  );
}
