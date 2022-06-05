import React from 'react';
import '../styles/globals.scss';

/* eslint-disable react/prop-types */

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }