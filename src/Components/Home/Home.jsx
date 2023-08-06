import React from 'react'
import "./Home.scss"

const Card =({img})=>(
  <img className='card' src={img} alt='cover' />
)

const Row =({title})=>(
  <div className="row">
    <h2>{title}</h2>
    <div>
      <Card img={"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"} />
      <Card img={"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"} />
      <Card img={"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"} />
      <Card img={"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"} />
    </div>

  </div>
)

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"}/>

    </section>
  )
}

export default Home