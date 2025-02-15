import { PasswordVisibilityContext } from '@/context/PasswordVisibilityContext';
import { useContext } from 'react';

export const usePasswordVisibility = () => {
  const context = useContext(PasswordVisibilityContext);

  if (!context) {
    throw new Error(
      'usePasswordVisibility must be used within a PasswordVisibilityProvider'
    );
  }

  return context;
};
