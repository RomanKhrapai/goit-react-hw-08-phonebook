/* eslint-disable no-unused-vars */
import UserMenu from 'components/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

import { Header } from './Container.styles';
import s from './NavLink.module.css';

export default function AppBar() {
  const isLoggerIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.link}  ${s.activeLink}` : s.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/phoneBook"
        className={({ isActive }) =>
          isActive ? `${s.link}  ${s.activeLink}` : s.link
        }
      >
        Phone book
      </NavLink>

      <div style={{ width: '40px' }}>
        {!isLoggerIn ? (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? `${s.link}  ${s.activeLink}` : s.link
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `${s.link}  ${s.activeLink}` : s.link
              }
            >
              Log in
            </NavLink>
          </>
        ) : (
          <UserMenu />
        )}
      </div>
    </Header>
  );
}
