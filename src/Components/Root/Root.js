import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
