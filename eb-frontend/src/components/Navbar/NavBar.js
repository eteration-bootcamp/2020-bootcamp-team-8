import React from 'react';
import logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

import * as ROUTES from '../../routes';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <NavLink activeClassName={styles.active} to={ROUTES.EXPLORE}>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to={ROUTES.RANK}>
              Rank
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to={ROUTES.COMPARE}>
              Compare
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
