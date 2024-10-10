import styled from 'styled-components';

interface StackProps {
  direction?: 'row' | 'column';
  spacing?: string;
  justifyContent?: string;
  alignItems?: string;
  wrap?: 'wrap' | 'nowrap';
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ spacing }) => spacing || '0'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`;

export default Stack;
