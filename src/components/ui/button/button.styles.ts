import styled, { css } from 'styled-components';

// Extending ButtonHTMLAttributes to include native button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
}

// Styled Button component
export const Button = styled.button<ButtonProps>`
  padding: 15px 30px;
  font-size: 15px;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  ${(
    { variant = 'primary' } // Set default variant to 'primary'
  ) =>
    variant === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.primary};
      color: white;

      &:hover {
        background-color: ${props => props.theme.colors.primary} / 0.9;
      }

      &:disabled {
        background-color: #007bff80;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: #6c757d;
      color: white;

      &:hover {
        background-color: #5a6268;
      }

      &:disabled {
        background-color: #6c757d80;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === 'outlined' &&
    css`
      background-color: transparent;
      /* color: ${props => props.theme.colors.primary}; */
      /* border-color: ${props => props.theme.colors.primary}; */

      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: white;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;
