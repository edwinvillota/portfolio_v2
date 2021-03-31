import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';
import { SizeVariants, ColorVariants } from 'ts/enums';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  sizeVariant: SizeVariants;
  colorVariant: ColorVariants;
}

const TextButton: React.FC<TextButtonProps> = ({ label, sizeVariant, colorVariant, ...props }) => (
  <StyledButton {...props} sizeVariant={sizeVariant} colorVariant={colorVariant}>
    <span>{label}</span>
  </StyledButton>
);

export default TextButton;
