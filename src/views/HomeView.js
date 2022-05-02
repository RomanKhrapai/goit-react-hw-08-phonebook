import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HomeView() {
  return (
    <>
      <h1> HOME</h1>
      <Outlet />
    </>
  );
}
