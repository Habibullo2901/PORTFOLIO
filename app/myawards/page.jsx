import React from 'react'
import './Myawards.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className='myawards'>
      <p className='awards_title'>My awards</p>
      <div className='awards'>
        <Image src='/sertifikat.jpg' alt='firstaward' width={700} height={500} priority />
        <Image src='/vaucher.jpg' alt='secondaward' width={700} height={500} priority />
        <Image src='/maqyor.jpg' alt='thirdaward' width={500} height={600} priority />
        <Image src='/maqyor2.jpg' alt='fourthaward' width={500} height={600} priority />
        <img className='codewars' src="https://www.codewars.com/users/Habibullo2901/badges/large" alt="" />
      </div>
    </div>
  )
}

export default page