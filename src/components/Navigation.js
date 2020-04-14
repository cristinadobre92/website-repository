import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul className="nav-links">
            <Link to='/professional'>
                <li>Professional</li>
            </Link>
            <Link to='/personal'>
                <li>Personal</li>
            </Link>
         </ul>
               
    </nav>
  );
}

export default Nav;