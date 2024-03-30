import React from 'react'
import Link from 'next/link'
import './Projects.css'

const layout = ({ children }) => {
  return (
    <div className='projects_layout'>
      <p className='projects_title'>My projects. There are my best 5 projects selected.</p>
      <ul className='projects_nav'>
        {/* <li><Link href='/projects'>Projects</Link></li> */}
        <li><Link href='/projects/project1'>project 1</Link></li>
        <li><Link href='/projects/project2'>project 2</Link></li>
        <li><Link href='/projects/project3'>project 3</Link></li>
        <li><Link href='/projects/project4'>project 4</Link></li>
        <li><Link href='/projects/project5'>project 5</Link></li>
      </ul>
      {children}
    </div>
  )
}

export default layout