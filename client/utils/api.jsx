let csrfToken = null;
let csrfTokenPromise = null;

const fetchCsrfToken = async () => {
  try {
    console.log('Obtendo o token CSRF...');
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/csrf-token`, {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Falha ao obter o token CSRF.');
    }

    const data = await response.json();
    console.log('Token CSRF obtido:', data.token);
    return data.token;
  } catch (error) {
    console.error('Erro ao obter o token CSRF:', error);
    throw error;
  }
};

const ensureCsrfToken = async () => {
  if (csrfToken === null) {
    if (!csrfTokenPromise) {
      csrfTokenPromise = fetchCsrfToken().then((token) => {
        csrfToken = token;
        console.log('Token CSRF atribuído:', csrfToken);
        return csrfToken;
      });
    }
    await csrfTokenPromise;
  }
  return csrfTokenPromise;
};

// Inicia a busca do token CSRF assim que o módulo for importado
ensureCsrfToken();

// Exporta a função que retorna o token CSRF diretamente após a resolução da Promise
export default ensureCsrfToken;