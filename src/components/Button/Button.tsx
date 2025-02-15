import { ComponentProps } from 'react';

type ButtonPropsType = {
  text: string;
  className?: string;
  background: 'enable' | 'disabled';
  variant: 'primary' | 'secondary';
} & ComponentProps<'button'>;

export const Button = ({ text, className }: ButtonPropsType) => {
  return (
    <>
      <button className={`rounded-md ${className}`}>{text}</button>
    </>
  );
};
