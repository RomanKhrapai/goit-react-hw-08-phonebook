import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { ReactComponent as UserFoto } from '../../images/user.svg';
import authOperations from 'redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  return (
    <>
      <UserFoto />
      <span>{userName}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        sign out
      </button>
    </>
  );
}
