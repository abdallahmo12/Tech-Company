import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='p-5 m-2 bg-secondary text-white'>
        <div className="row">
          <div className="col my-2">
            <h2>Email</h2>
            <h6> techcompany12@gmail.com </h6>
          </div>
          <div className="col my-2">
          <h2 className=''>Phones</h2>
          <h6> +201122323250 </h6>
          <h6> +201267393280 </h6>
          </div>
        </div>
      </div>
    )
  }
}
