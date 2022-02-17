import 'tailwindcss/tailwind.css'
import '../styles/main.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}