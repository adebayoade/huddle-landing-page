import Stack from '../../../components/ui/stack';
import { BENEFITS } from '../../../constants/benefits';
import Card from '../../../components/ui/card';
import { BenefitImg, BenefitWrapper, BenefitContainer } from './benefits.styles';

export default function Benefits() {
  return (
    <BenefitContainer>
      <Stack spacing="30px" direction="column">
        {BENEFITS.map(benefit => (
          <Card key={benefit.id}>
            <BenefitWrapper direction={benefit.id === 2 ? 'row-reverse' : 'row'}>
              <Stack spacing="20px" direction="column">
                <h1>{benefit.title}</h1>
                <p>{benefit.body}</p>
              </Stack>

              <div>
                <BenefitImg alt="illustration" src={benefit.image} />
              </div>
            </BenefitWrapper>
          </Card>
        ))}
      </Stack>
    </BenefitContainer>
  );
}
