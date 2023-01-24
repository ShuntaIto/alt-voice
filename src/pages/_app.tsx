import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

import 'modern-normalize';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js + Fluent UI Example</title>
      </Head>
      <Component {...pageProps} />
    </FluentProvider>
  );
}
