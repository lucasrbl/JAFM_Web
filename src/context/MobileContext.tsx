import { createContext, ReactNode, useState, useEffect } from 'react';

type ContextPropsType = {
  isMobile: boolean;
};

export const MobileContext = createContext<ContextPropsType | undefined>(
  undefined
);

export const MobileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};
