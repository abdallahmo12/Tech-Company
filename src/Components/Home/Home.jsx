// import axios from 'axios';
import React, { Component } from 'react';
import './Home.css';
import { Link , Outlet } from 'react-router-dom';


export default class Home extends Component {
  

  render() {
    // console.log(this.props.allArticles);
    return (
        <div className='direction'>
          <h2 className='text-center my-5'> أخبار كرة القدم اليومية </h2>
          
        <div className="container my-5">

        <div className="row">
          <div className="col-5">
          {
            this.props.allArticles.length > 0 ? this.props.allArticles.map ((article , i ) => {
            
            let dt = new Date(article.publishedAt);
            let day = dt.getDate();
            let month = dt.getMonth() + 1 ;
            let year = dt.getFullYear();
            
            return <Link className='text-d-none' to={''+i} key={i}>
              <div className=" m-2 p-2 border bg-white rounded border-info fs-md-2 f-225">
                <h4 className='text-dark'> {article.title}</h4>
                <div className='w-100 text-secondary'> <p className='text-start'>{day}-{month}-{year}</p></div>
              </div>
            </Link>
            }) : <h2> Loading .... </h2>
          }
          </div>
          <div style={{width:"75%"}} className="fixed-bottom w-50 mb-5 bg-white border rounded ms-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
    )
  }
}
