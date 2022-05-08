import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FormGroup,
  FormControlLabel,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Tabs,
  Tab,
} from '@mui/material';

import useRouteMatch from 'useHooks/useRouteMatch';
import { SwitchLightAndDark } from './SwitchLightAndDark.styles';

import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu';

export default function MenuAppBar() {
  const isLoggerIn = useSelector(authSelectors.getIsLoggedIn);

  const routeMatch = useRouteMatch([
    '/goit-react-hw-08-phonebook',
    '/goit-react-hw-08-phonebook/phoneBook',
  ]);
  const currentTab = routeMatch ? routeMatch?.pattern?.path : false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={<SwitchLightAndDark sx={{ m: 1 }} defaultChecked />}
        />
      </FormGroup>

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
                value="/goit-react-hw-08-phonebook"
                to="/goit-react-hw-08-phonebook"
                component={Link}
              />

              <Tab
                label={
                  <Typography variant="h6" component="span">
                    Phone book
                  </Typography>
                }
                value="/goit-react-hw-08-phonebook/phoneBook"
                to="/goit-react-hw-08-phonebook/phoneBook"
                component={Link}
                disabled={!isLoggerIn}
              />
            </Tabs>
          </Typography>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
