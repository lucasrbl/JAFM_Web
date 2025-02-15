import { createContext, ReactNode, useState } from 'react';
import { Manager } from '../types/Manager';
import { formatCpf, formatPhoneNumber } from '@/utils';

type UserContextType = {
  user: Manager;
  handleInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Manager>({
    name: '',
    affiliate: '',
    birthDate: '',
    class: '',
    cnpj: '',
    cpf: '',
    email: '',
    password: '',
    phone: '',
    ra: '',
    startDate: '',
    confirmPassword: '',
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'cpf') {
      const unformattedCpf = value.replace(/\D/g, '');
      const formattedCpf = formatCpf(unformattedCpf);

      setUser({ ...user, [name]: unformattedCpf });
      e.target.value = formattedCpf;
    }

    if (name === 'phone') {
      const unformattedPhone = value.replace(/\D/g, '');
      const formattedPhone = formatPhoneNumber(unformattedPhone);

      setUser({ ...user, [name]: unformattedPhone });
      e.target.value = formattedPhone;

      console.log(unformattedPhone, 'para o estado');
      console.log(e.target.value, 'para o usuário');
    }
    setUser({ ...user, [name]: value });
  };

  return (
    <UserContext.Provider value={{ user, handleInput }}>
      {children}
    </UserContext.Provider>
  );
};
