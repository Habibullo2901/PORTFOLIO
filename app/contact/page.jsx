import React from 'react'
import './Contact.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className='contact'>
      <h1 className='contact_title'>Contact</h1>
      <div className='social_networks'>
        <div>
          <a href="https://t.me/Habibullo_2901" target="_blank" rel="noopener noreferrer"><Image src="/telegramimg.png" alt="telegram" width={80} height={80} /></a>
          <p>Telegram</p>
        </div>
        <div>
          <a href="https://www.instagram.com/khikmatullaev_h" target="_blank" rel="noopener noreferrer"><Image src="/instagram.png" alt="instagram" width={80} height={80} /></a>
          <p>Instagram</p>
        </div>
        <div className='account'>
          <a href='tel:+998908110031' className='number' target="_blank" rel="noopener noreferrer" title='tel:5551234567'><img src='./phone.png' width={80} height={80} alt="" /></a>
          <p className='number__text'>telephone number</p>
        </div>
      </div>
        <p className='contact_title'>Other</p>
        <div className='account'>
        <a href="https://github.com/Habibullo2901" target="_blank" rel="noopener noreferrer"><Image src="/github.webp" alt="github" width={80} height={80} /></a>
        <p>Github</p>
      </div>
    </div>
  )
}

export default page