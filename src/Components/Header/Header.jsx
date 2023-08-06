import React from 'react'
import logo from "../../Logo.png"
import {Link} from "react-router-dom"
import {LuSearch} from "react-icons/lu"

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />

      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <LuSearch/>
    </nav>
  )
}

export default Header
