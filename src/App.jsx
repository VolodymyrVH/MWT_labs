import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink, Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <header>
        <NavLink to="/a">Page A</NavLink>
        <NavLink to="/b">Page B</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
