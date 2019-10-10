import Head from 'next/head';
import React from 'react';
import Header from '../Header/Header';

const Home = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>Peart St Surfboards</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
