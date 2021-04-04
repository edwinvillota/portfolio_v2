import styled from 'styled-components';
import { ButtonColorVariants, ButtonSizeVariants } from 'ts/enums';
import { ButtonTypography } from 'styles/Buttons';
interface ButtonProps {
  readonly sizeVariant: ButtonSizeVariants;
  readonly colorVariant: ButtonColorVariants;
  readonly fullWidth?: boolean;
  readonly outlined?: boolean;
  readonly rounded?: boolean;
  readonly isLoading?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ sizeVariant }) => ButtonTypography({ size: sizeVariant })};
  background-color: ${({ theme, outlined, colorVariant }) =>
    !outlined ? theme.colors.buttons.colors[colorVariant] : 'transparent'};
  color: ${({ theme }) => theme.colors.light.light3};
  border-radius: ${({ rounded }) => (rounded ? '50px' : '0')};
`;
