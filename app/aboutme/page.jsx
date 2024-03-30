import React from 'react'
import './Aboutme.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className='aboutme'>
      <h1 className='aboutme_title'>about me</h1>
      <p className='text'>My name is Hikmatullayev Habibullo. I am currently 17 years old. I was born on January 29, 2007 in Tashkent. I live in Sergeli district. in my youth I study in kindergarten 116 and now in school 127. in addition, I study in the front-end direction at the training center "Najot Ta'lim".
          My parents and my own interests made me choose programming. In addition to programming, sports include: tennis, ping-pong, swimming; robotics; I am interested in mobilography.</p>
      <div className='shape'><Image src='/shape.png' alt='shpes' width={100} height={10} /></div>
    </div>
  )
}

export default page