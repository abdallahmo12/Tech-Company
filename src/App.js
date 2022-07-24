import React, { Component } from 'react';
import './App.css';
import Parent from './Components/Parent/Parent';
import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Personal from './Components/PresonalInfo/Presonal';
import Contact from './Components/Contact/Contact';
import Brief from './Components/Breif/Brief';
import Newspost from './Components/Newspost/Newspost';
import axios from 'axios';
import TechNews from './Components/TechNews/TechNews';


export default class App extends Component {
  state={
    allArticles : [],
    TechArticles : [],
  }
  getTechNewsFromApi = async() =>{
    let { data } = await axios('https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=efe88d59d7a9406c9fccdc2b9a1f013c');
    // console.log(data.articles);
    this.setState({
      TechArticles : data.articles
    })
  }

  getNewsFromApi = async () =>{
    let { data } = await axios('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=efe88d59d7a9406c9fccdc2b9a1f013c');
    // console.log(data.articles);
    let allArticles = data.articles;
    this.setState({allArticles});
  }

  componentDidMount() { 
    this.getNewsFromApi();
    this.getTechNewsFromApi();
   }
  render() {
    return (
      <div className='bg-light vh-auto'>
        <Navbar />

        <Routes>
          <Route path='Tech-Company' element={<TechNews techNews={this.state.TechArticles} />}/>
          <Route path='Tech-Company/technews' element={<TechNews techNews={this.state.TechArticles} />}/>
          <Route path='Tech-Company/about' element={<About />} >
            <Route path='' element={<Personal />} />
            <Route path='personal' element={<Personal />} />
            <Route path='contact' element={<Contact />} />
            <Route path='brief' element={<Brief />} />
          </Route>
          <Route path='Tech-Company/parent' element={<Parent />}/>
          <Route path='*' element={<>
          <div className='allheight d-flex align-items-center justify-content-center'>
            <h2>404</h2>
            <h2>Error !! Page Not Found</h2>
          </div>
          </>}/>

        </Routes>
        
        <a href='#' className='upBtn bg-primary rounded'> <i className="fa-solid fa-arrow-up" ></i> </a>
      </div>
    )
  }
}