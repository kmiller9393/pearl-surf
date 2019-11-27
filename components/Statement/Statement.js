import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '70px 0'
  },
  contentContainer: {
    borderTop: '1px solid black',
    width: 910
  },
  header: {
    margin: '30px 0',
    textAlign: 'center'
  },
  content: {
    width: 910
  },
  link: {
    '&:hover': {
      cursor: 'pointer'
    },
    fontWeight: 600
  }
});

const Statement = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleRoute = () => {
    router.push('/sustainability');
  };

  return (
    <section className={classes.container}>
      <article className={classes.contentContainer}>
        <h2 className={classes.header}>Separated By Sustainability</h2>
        <p className={classes.content}>
          What separates us from other surf board companies is not only how we
          build our boards, but why we do. Sustainability is extremely important
          to us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. To learn more
          about our sustainable products,{' '}
          <span className={classes.link} onClick={handleRoute}>
            click here.
          </span>
        </p>
      </article>
    </section>
  );
};

export default Statement;
