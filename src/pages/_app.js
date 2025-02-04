import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'simplebar-react/dist/simplebar.min.css';
import { AuthConsumer, AuthProvider } from '../contexts/auth-context';
import { useNProgress } from '../hooks/use-nprogress';
import { createTheme } from '../theme';
import { createEmotionCache } from '../utils/create-emotion-cache';
import 'tailwindcss/tailwind.css';

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  const [isClient, setIsClient] = useState(false);

  // This effect ensures that BrowserRouter is rendered only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Mock Master</title>
        <link rel="icon" href="/assets/favicon-16x16.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Only render BrowserRouter on the client side */}
            {isClient ? (
              <Router> {/* Wrap the app with BrowserRouter only on the client */}
                <AuthConsumer>
                  {(auth) => (auth.isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />))}
                </AuthConsumer>
              </Router>
            ) : (
              // Render a loading state or nothing during SSR
              <SplashScreen />
            )}
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
