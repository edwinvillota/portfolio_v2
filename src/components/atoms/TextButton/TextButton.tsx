import React, { HTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface TextButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const TextButton: React.FC<TextButtonProps> = ({ label, ...props }) => (
  <StyledButton {...props}>
    <span>{label}</span>
  </StyledButton>
);

export default TextButton;
