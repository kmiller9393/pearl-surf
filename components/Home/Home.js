import Head from '../NewHead/NewHead';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
        <div style={{ height: 587 }} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
