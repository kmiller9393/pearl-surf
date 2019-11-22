import Head from '../NewHead/NewHead';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Head />
      <main>
        <Header position={0} />
        <Intro />
        <Footer />
      </main>
    </>
  );
};

export default Home;
