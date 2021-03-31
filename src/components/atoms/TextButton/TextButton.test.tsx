import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { TextButton } from '.';

afterEach(cleanup);

const defaultProps = {
  label: 'DefaultLabel',
  onClick: jest.fn(),
};

describe('TextButton test', () => {
  it('should show default button label', () => {
    render(<TextButton {...defaultProps} />);
    expect(screen.getByText('DefaultLabel')).toBeInTheDocument();
  });

  it('should show different button label', () => {
    render(<TextButton {...defaultProps} label="AnotherLabel" />);
  });

  it('should calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<TextButton {...defaultProps} onClick={onClick} />);
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call a function when button is disabled', () => {
    const onClick = jest.fn();
    const { getByText } = render(<TextButton {...defaultProps} onClick={onClick} disabled />);
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).not.toHaveBeenCalled();
  });
});
