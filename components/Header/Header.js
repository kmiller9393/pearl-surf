import React from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tabs: {
    backgroundColor: '#8AD8F2',
    height: 3
  }
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
