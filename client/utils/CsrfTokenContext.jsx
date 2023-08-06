import React, { createContext, useContext, useState, useEffect } from 'react';

const CsrfTokenContext = createContext();

export function CsrfTokenProvider({ children }) {
  const [csrfToken, setCsrfToken] = useState(null);
  const [isTokenFetched, setIsTokenFetched] = useState(false);

  useEffect(() => {
    if (!isTokenFetched) {
      const fetchCsrfToken = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/csrf-token`, {
            credentials: 'include',
          });

          if (!response.ok) {
            throw new Error('Falha ao obter o token CSRF.');
          }

          const data = await response.json();
          return data.token;
        } catch (error) {
          console.error('Erro ao obter o token CSRF:', error);
          throw error;
        }
      };

      fetchCsrfToken()
        .then(token => {
          setCsrfToken(token);
          setIsTokenFetched(true);
        })
        .catch(error => {
          console.error('Erro ao obter o token CSRF:', error);
        });
    }
  }, [isTokenFetched]);

  return (
    <CsrfTokenContext.Provider value={{ csrfToken }}>{children}</CsrfTokenContext.Provider>
  );
}

export function useCsrfToken() {
  const context = useContext(CsrfTokenContext);
  if (!context) {
    throw new Error('useCsrfToken deve ser usado dentro de CsrfTokenProvider');
  }
  return context.csrfToken;
}
