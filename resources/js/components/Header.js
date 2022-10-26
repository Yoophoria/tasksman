import React from 'react'
  import { Link } from 'react-router-dom'

  const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Tasksman</Link>
        <Link className='navbar-brand' to='/app'>create</Link>
        <Link className='navbar-brand' to='/create'>new</Link>
      </div>
    </nav>
  )

  export default Header