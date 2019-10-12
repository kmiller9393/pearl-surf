import React, { useState, useEffect } from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { convertToRoute } from '../../utils/convertToRoute';
import styles from './styles.js';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const useStyles = makeStyles({
  tabs: {
    backgroundColor: '#54d1db',
    height: 3
  }
});

const Header = props => {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = useState(props.position);

  useEffect(() => {
    setValue(props.position);
  }, [props.position]);

  const handleChange = e => {
    const route = convertToRoute(e.target);

    router.push(route);
  };

  const sendHome = () => {
    router.push('/');
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {styles}
      <img
        src="../../static/pearl-st-logo.png"
        alt="logo"
        onClick={sendHome}
        className="header-logo"
      />
      <AppBar
        style={{ backgroundColor: '#111', marginTop: 10 }}
        position="sticky"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          classes={{ indicator: classes.tabs }}
        >
          <Tab label="Home" />
          <Tab label="Orders" />
          <Tab label="Gallery" />
          <Tab label="Sustainability" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Header;
