import React from 'react';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  MobileProvider,
  PasswordVisibilityProvider,
  UserProvider,
} from './context/index.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MobileProvider>
          <UserProvider>
            <PasswordVisibilityProvider>
              <App />
            </PasswordVisibilityProvider>
          </UserProvider>
        </MobileProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
