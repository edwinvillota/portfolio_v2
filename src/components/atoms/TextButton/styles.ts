import styled from 'styled-components';
import { SizeVariants, ColorVariants } from 'ts/enums';
interface ButtonProps {
  readonly sizeVariant: SizeVariants;
  readonly colorVariant: ColorVariants;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.lengths.md2};
  height: ${(props) => props.theme.lengths[props.sizeVariant]};
  background-color: ${(props) => props.theme.colors[props.colorVariant]};
`;
