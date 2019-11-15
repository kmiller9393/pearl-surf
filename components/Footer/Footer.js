import React, { useState, useEffect } from 'react';
import { Tab, Tabs, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Router, { useRouter } from 'next/router';

const useStyles = makeStyles({
  tabs: {
    backgroundColor: '#111',
    height: 3
  }
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position="static" style={{ backgroundColor: '#111' }}>
      <Tabs value={value} centered classes={{ indicator: classes.tabs }}>
        <Tab label="Social Media" disableRipple />
      </Tabs>
    </AppBar>
  );
};

export default Footer;
