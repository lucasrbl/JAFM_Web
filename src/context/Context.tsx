import { createContext, ReactNode, useState, useEffect } from 'react';

type ContextPropsType = {
  isMobile: boolean;
  showPassword: boolean;
  handlePasswordVisibility: () => void;
};

const defaultValue: ContextPropsType = {
  isMobile: false,
  showPassword: false,
  handlePasswordVisibility: () => undefined,
};

type ProviderPropsType = {
  children: ReactNode;
};

export const AppContext = createContext<ContextPropsType>(defaultValue);

export const AppProvider = ({ children }: ProviderPropsType) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AppContext.Provider
      value={{ isMobile, showPassword, handlePasswordVisibility }}
    >
      {children}
    </AppContext.Provider>
  );
};
