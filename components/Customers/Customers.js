import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import faker from 'faker';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 60
  },
  avatar: {
    height: 250,
    margin: '0 35px',
    width: 250
  },
  header: {
    margin: '30px 0',
    textAlign: 'center'
  }
});

const Customers = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <section>
      <h2 className={classes.header}>Our Customers</h2>
      <article className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          src={faker.image.avatar()}
          alt="customer"
        />
        <Avatar
          className={classes.avatar}
          src={faker.image.avatar()}
          alt="customer"
        />
        <Avatar
          className={classes.avatar}
          src={faker.image.avatar()}
          alt="customer"
        />
      </article>
    </section>
  );
};

export default Customers;
