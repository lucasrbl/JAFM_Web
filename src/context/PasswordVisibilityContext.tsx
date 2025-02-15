import { createContext, ReactNode, useState } from 'react';

type PasswordVisibilityContextType = {
  showPassword: boolean;
  handlePasswordVisibility: () => void;
};

export const PasswordVisibilityContext = createContext<
  PasswordVisibilityContextType | undefined
>(undefined);

export const PasswordVisibilityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordVisibilityContext.Provider
      value={{ showPassword, handlePasswordVisibility }}
    >
      {children}
    </PasswordVisibilityContext.Provider>
  );
};
