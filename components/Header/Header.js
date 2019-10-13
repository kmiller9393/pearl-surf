import React, { useState, useEffect } from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { convertToRoute } from '../../utils/convertToRoute';
import NewHead from '../NewHead/NewHead';
import styles from './styles';

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
    <>
      <NewHead />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {styles}
        <img
          src="../../static/pearl-st-logo.png"
          alt="logo"
          onClick={sendHome}
          className="header-logo"
        />
        <AppBar style={{ backgroundColor: '#111', marginTop: 118 }} fixed>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            classes={{ indicator: classes.tabs }}
          >
            <Tab label="Home" disableRipple />
            <Tab label="Orders" disableRipple />
            <Tab label="Gallery" disableRipple />
            <Tab label="Sustainability" disableRipple />
            <Tab label="Contact" disableRipple />
          </Tabs>
        </AppBar>
      </section>
    </>
  );
};

export default Header;
