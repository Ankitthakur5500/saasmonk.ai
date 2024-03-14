"use client"
import Link from 'next/link'
import React from 'react'

function handleClick(){
  console.log("Add new movies");
}
function handleClick2(){
  console.log("Add new movies");
}

function Navbar() {
  return (
    <nav className="navbar bg-body-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">MOVIECRITIC</Link>
        <div className='navbarma'>
          <button className="btn btn-1" type="submit" onClick={handleClick}>Add new movies</button>
          <button className="btn btn-2" type="submit" onClick={handleClick2}>Add new review</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar