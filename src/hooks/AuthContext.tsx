import React, { createContext, useContext, useEffect, useState, ReactNode }from 'react';
import { onAuthStateChanged, User, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  user: User | null;
  autenticate: boolean;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);


interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [autenticate, setAutenticate] = useState<boolean>(false);

    const login = (email: string, pass: string, errorLogin: boolean) => {

        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            // Signed in
            setAutenticate(true)
            navigate("/home");
          })
          .catch((error) => {
            const errorTeste = errorLogin
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Erro ao fazer login:", errorCode, errorMessage);
          });
      };


  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={ { autenticate, user } }>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
