import React, { Component } from 'react';
import { Link , Outlet } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
    <>
        <div className="container">
          <div className="row my-3">
            <div className="col-3 bg-light allheight">
                <ul className='navbar-nav text-center'>
                  <li className='nav-item active my-3'>
                    <Link className=' nav-link w-100' aria-current="page" to='personal'>Personal Info</Link>
                  </li>
                  <li className='nav-item my-3'>
                    <Link className='nav-link w-100' to='contact'>Contact Us</Link>
                  </li>
                  <li className='nav-item my-3'>
                    <Link className=' nav-link w-100' to='brief'>Brief</Link>
                  </li>
                </ul>
            </div>
            <div className="col-9">
              <Outlet />
            </div>
          </div>
        </div>
    </>
    )
  }
}
