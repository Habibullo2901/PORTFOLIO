import React from 'react'
import './Skills.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className='skills'>
      <h1 className='title'>Skills</h1>
      <div className='skill_list'>
        <div className='skill1'>
          <Image src='/html.svg' alt='html' width={100} height={100} priority />
          <p>HTML</p>
        </div>
        <div className='skill1'>
          <Image src='/css.svg' alt='css' width={100} height={100} priority />
          <p>CSS</p>
        </div>
        <div className='skill1'>
          <Image src='/js.svg' alt='js' width={100} height={100} priority />
          <p>JS</p>
        </div>
        <div className='skill1'>
          <Image src='/react.png' alt='react' width={120} height={100} priority />
          <p>React</p>
        </div>  
        <div className='skill1'>
          <Image src='/git.svg' alt='git' width={100} height={100} priority />
          <p>GIT</p>
        </div>
        <div className='skill1'>
          <Image src='/github.webp' alt='github' width={100} height={100} priority />
          <p>GITHUB</p>   
        </div>
      </div>
    </div>
  )
}

export default page