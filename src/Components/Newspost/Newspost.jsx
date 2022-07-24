import React from 'react';
import { useParams } from 'react-router-dom';
import './Newspost.css';

function Newspost(props) {
    let {index} = useParams();
    let intIndex = parseInt(index);
    console.log(typeof intIndex);
    let Articles = props.allArticles.length && props.allArticles;
    console.log(Articles);
  return <div className='font-small'>
    <div style={{maxWidth:'100%', height:'calc(100vh - 320px)'}} className="w-100 mx-auto bg-white">
      <img style={{objectFit:"contain"}} className='w-100 h-100'src={Articles[index].urlToImage} alt="img" />
    </div>
    <h1>{Articles[index].title}</h1>
    <p>{Articles[index].description}</p>
</div>
}

export default Newspost