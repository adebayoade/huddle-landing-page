import Stack from '../../../components/ui/stack';
import { BENEFITS } from '../../../constants/benefits';
import Card from '../../../components/ui/card';
import { BenefitImg, BenefitsWrapper, BenefitsSection } from './benefits.styles';
import { SecondTitle } from '../../../globalStyles';

export default function Benefits() {
  return (
    <BenefitsSection>
      <Stack spacing="40px" direction="column">
        {BENEFITS.map(benefit => (
          <Card key={benefit.id}>
            <BenefitsWrapper direction={benefit.id === 2 ? 'row-reverse' : 'row'}>
              <Stack spacing="20px" direction="column">
                <SecondTitle>{benefit.title}</SecondTitle>
                <span>{benefit.body}</span>
              </Stack>

              <div>
                <BenefitImg alt="illustration" src={benefit.image} />
              </div>
            </BenefitsWrapper>
          </Card>
        ))}
      </Stack>
    </BenefitsSection>
  );
}
