import React from 'react'
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
          <ul>
            <li><Link  href="/">Home</Link></li>
            <li><Link href="/aboutme">About me</Link></li>
            <li><Link href='/myawards'>My awards</Link></li>
            <li><Link href='/projects'>Projects</Link></li>
            <li><Link href='/skills'>Skills</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar