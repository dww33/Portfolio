import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import NavBar from '../components/NavBar';
import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
