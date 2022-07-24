import React from 'react';
import './TechNews.css';
import newsImg from '../../imgs/news.jpg';

function TechNews(props) {
    let news = props.techNews;
  return (
    <div className='container'>
        <div className="news-header text-center mt-5"><h2 className='fw-bold'> أخبار التكنولوجيا </h2></div>
        <div className="row g-3 my-3">

            {
                news.length ? news.map( (n,i) => { 
                    let dt = new Date(n.publishedAt);
                    let day = dt.getDate();
                    let month = dt.getMonth() + 1 ;
                    let year = dt.getFullYear();
                    return (
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div className="news direction p-3 bg-white border rounded">
                            <img src={n.urlToImage ? n.urlToImage : newsImg} className='w-100' alt="img" />
                            <div className="my-3">
                                <h2>{n.title}</h2>
                                <p>{n.description}</p>
                                <div className='w-100 text-secondary'> <p className='text-start'>{day}-{month}-{year}</p></div>
                            </div>
                        </div>
                    </div>)
                }) : <>
                <div className="allheight-s border rounded-top bg-light d-flex justify-content-center align-items-center bg-white">
                    <span className='me-2 display-4'>Loading ... </span>
                    <i className='fa-spinner fa-spin fa-4x text-dark'></i>  
                </div>
                </>
            }
            {/* <div className="allheight-s border rounded-top bg-light d-flex justify-content-center align-items-center bg-white">
                <span className='me-2 display-4'>Loading ... </span>
                <i className='fa-spinner fa-spin fa-4x text-dark'></i>  
            </div> */}
            {/* {
                news.map( n => { 

                    let dt = new Date(n.publishedAt);
                    let day = dt.getDate();
                    let month = dt.getMonth() + 1 ;
                    let year = dt.getFullYear();
                    return <>
                    <div className="col-md-3 col-12">
                        <div className="news direction p-3 bg-white border rounded">
                            <img src={n.urlToImage ? n.urlToImage : "B_News.jpg"} className='w-100' alt="img" />
                            <div className="my-3">
                                <h2>{n.title}</h2>
                                <p>{n.description}</p>
                                <div className='w-100 text-secondary'> <p className='text-start'>{day}-{month}-{year}</p></div>
                            </div>
                        </div>
                    </div>
                    
                </>})
            } */}
        </div>
    </div>
  )
}

export default TechNews