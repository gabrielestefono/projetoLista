// App.js
import '@/styles/globals.css';
import { CsrfTokenProvider } from '@/utils/CsrfTokenContext';

export default function App({ Component, pageProps }) {
  return (
    <CsrfTokenProvider>
      <Component {...pageProps} />
    </CsrfTokenProvider>
  );
}