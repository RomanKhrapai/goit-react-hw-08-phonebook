import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Toolbar, AppBar, Tabs, Tab } from '@mui/material';

import useRouteMatch from 'useHooks/useRouteMatch';

import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu';

export default function MenuAppBar() {
  const isLoggerIn = useSelector(authSelectors.getIsLoggedIn);

  const routeMatch = useRouteMatch(['/', '/phoneBook']);
  const currentTab = routeMatch ? routeMatch?.pattern?.path : false;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="nav" sx={{ flexGrow: 1 }}>
          <Tabs
            value={currentTab}
            indicatorColor="secondary"
            textColor="inherit"
            aria-label="full width tabs example"
          >
            <Tab
              label={
                <Typography variant="h6" component="span">
                  Home
                </Typography>
              }
              value="/"
              to="/"
              component={Link}
            />

            <Tab
              label={
                <Typography variant="h6" component="span">
                  Phone book
                </Typography>
              }
              value="/phoneBook"
              to="/phoneBook"
              component={Link}
              disabled={!isLoggerIn}
            />
          </Tabs>
        </Typography>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
