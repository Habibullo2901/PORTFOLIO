import React from 'react'
import './Project5.css'
import Image from 'next/image'

const page = () => {
    // https://66084b09d2b5ac0f3aa8c8b9--relaxed-meerkat-54936a.netlify.app/
  return (
    <div className='project_first'>
      <div className='project1'>
        <p className='project1_title'>project 5</p>
        <a className='project1_link' href="https://66084b09d2b5ac0f3aa8c8b9--relaxed-meerkat-54936a.netlify.app/" target="_blank" rel="Todolist">Todolist</a>
        <p className='project1_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas praesentium, saepe fuga totam quibusdam similique iusto nulla, modi facilis ad odit doloremque vitae porro numquam, maiores quis natus? Inventore a ullam sit, doloribus nihil nostrum dicta ratione accusamus at labore placeat earum, quibusdam facere recusandae beatae, in accusantium tempora sint velit. Laborum temporibus, amet asperiores minima quis dolores vero, ducimus nulla fugit at neque dolore sunt odio, fuga veniam? Expedita fugiat est nobis? Totam, et dolores quam numquam officia, adipisci eligendi cumque nulla eum cum maxime? Obcaecati velit ad quo laboriosam consequuntur culpa! Maxime suscipit velit distinctio quaerat amet!</p>
    </div>
    <div className='project1_img'>
      <Image src='/todolist.png' alt='todolist' width={500} height={300} priority />
    </div>
    </div>
  )
}

export default page