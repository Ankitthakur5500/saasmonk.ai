"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

function Navbar() {
  const router = useRouter();
  function handleClick(){
    console.log("Add new movies");
    router.push("/pages/movies");
  }
  function handleClick2(){
    console.log("Add new Reviews");
  }
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