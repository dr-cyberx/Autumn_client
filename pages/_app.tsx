import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import '@styles/variables.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="theme_light">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
