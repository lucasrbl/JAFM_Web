import { ReactNode } from 'react';

type IfPropsType = {
  children: ReactNode;
  condition: boolean;
};

export const If = ({ children, condition }: IfPropsType) => {
  return condition ? children : null;
};
