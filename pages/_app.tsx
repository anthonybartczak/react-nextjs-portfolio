import 'tailwindcss/tailwind.css'
import '../styles/main.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <Component {...pageProps} />
  );
}