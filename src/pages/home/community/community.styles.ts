import styled from 'styled-components';
import Card from '../../../components/ui/card';

export const CommunityContainer = styled(Card)`
  background-color: white;
  z-index: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 0;
  border-radius: 20px;
  left: 0;
  right: 0;
  margin: -150px auto 0 auto;

  h2 {
    text-align: center;
    color: black;
  }

  button {
    width: max-content;
    margin: auto;
  }

  @media (max-width: 1024px) {
    margin: -100px auto 0 auto;

    h2 {
      font-size: 20px;
    }
  }
`;
