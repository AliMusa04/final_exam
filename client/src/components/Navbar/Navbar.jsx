import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const wishData = useSelector((state)=> state.addToWish.value)
  
  return (
    <nav>
    <div className='nav_contaier'>
      <div className='nav_all_div'>
        <div className='nav_logo'>
          <h2>
          Coacher
          </h2>
        </div>

        <div className='nav_links'>
            <ul>
              <NavLink to={'/'}><li>Home</li></NavLink>
              <NavLink to={"/wishlist"}><li>WishList <span>{wishData.length}</span></li></NavLink>
              <NavLink to={'/addpage'}><li>Add Page</li></NavLink>
              <NavLink to={'#'}><li>About me</li></NavLink>
              <NavLink to={'#'}><li>Courses</li></NavLink>
              <NavLink to={'#'}><li>Stories</li></NavLink>
              <NavLink to={'#'}><li>Contact</li></NavLink>
            </ul>
            <button>Meet me</button>
        </div>

      </div>

    </div>
    </nav>
  )
}

export default Navbar