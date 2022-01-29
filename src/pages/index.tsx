// index.tsx
import React, { FC } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Home: FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title> NextJs blog</title>
      <Header />
    </Head>
  </div>
);

export default Home;
