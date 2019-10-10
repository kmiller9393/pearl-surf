import React, { useState } from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { convertToRoute } from '../../utils/convertToRoute';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const useStyles = makeStyles(theme => ({
  tabs: {
    backgroundColor: '#54d1db',
    height: 3
  }
}));

const Header = () => {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRouteNavigation = e => {
    e.preventDefault();

    const route = convertToRoute(e.target);

    router.push(route);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img src="../../static/pearl-st-logo.png" alt="logo" />
      <AppBar style={{ backgroundColor: '#111' }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          classes={{ indicator: classes.tabs }}
          onClick={handleRouteNavigation}
        >
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
