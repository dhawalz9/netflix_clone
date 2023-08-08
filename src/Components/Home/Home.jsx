import React, { useState, useEffect } from 'react'
import "./Home.scss"

const urlNowPla = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const urlUpcom = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const fetch = require('node-fetch');
const imgUrl = "https://image.tmdb.org/t/p/w500/"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTFlMjNjYzlkZTc2YTU3NmNjZDQ2YzRiNWIwOTg5YiIsInN1YiI6IjY0OWRjYWEyM2U2ZjJiMDExY2Y0ZjJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nLP0rUuL2KnOBmBJ8GurX4o8MGiccpHdXZwsn3I_oxU'
  }
};




const Card =({img})=>(
  <img className='card' src={img} alt='cover' />
)

const Row =({title, arr=[]})=>(
    <div className="row">
    <h2>{title}</h2>

    <div>
      {
        arr.map((item, index)=>(                // if we wnt to use {} instead of () (after =>) then we nees to put a return before <Card>
        <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
        ))
      }
    </div>

  </div>
)

const Home = () => {
  
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowMovies, setNowMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])

  useEffect(()=>{
    const fetchUpcoming = async ()=>{
      try {
        const response = await fetch(urlUpcom, options);
        const data = await response.json();
        setUpcomingMovies(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchNowPlaying = async ()=>{
      try {
        const response = await fetch(urlNowPla, options);
        const data = await response.json();
        setNowMovies(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchPopular = async ()=>{
      try {
        const response = await fetch(urlPopular, options);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchTopRated = async ()=>{
      try {
        const response = await fetch(urlTopRated, options);
        const data = await response.json();
        setTopMovies(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  })

  // fetch(url, options)
  // .then(res => res.json())
  // .then(json=> setUpcomingMovies(json.results))
  // .catch(err => console.error('error:' + err));

  // console.log(upcomingMovies)

  return (
    <section className="home">
      <div className="banner"></div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
      <Row title={"Now playing"} arr={nowMovies}/>
      <Row title={"Popular Movies"} arr={popularMovies}/>
      <Row title={"Top Rated Movies"} arr={topMovies}/>

    </section>
  )
}

export default Home