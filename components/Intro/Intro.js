import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  introContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0'
  },
  image: {
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    height: 467,
    marginRight: 30,
    width: 350
  },
  introContent: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: 30,
    width: 500
  }
});

const Intro = () => {
  const classes = useStyles();

  return (
    <article className={classes.introContainer}>
      <img
        src="../../static/pearl-intro.png"
        alt="profile picture"
        className={classes.image}
      />
      <p className={classes.introContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </article>
  );
};

export default Intro;
