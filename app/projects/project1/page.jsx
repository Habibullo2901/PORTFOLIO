import './Project1.css'
import React from 'react'
import Image from 'next/image'

const page = () => {

    return (
        <div className='project_first'>
            <div className='project1'>
                <p className='project1_title'>project 1</p>
                <a className='project1_link' href="https://main--weather-program.netlify.app/" target="_blank" rel="noopener noreferrer">Weather program</a>
                <p className='project1_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas praesentium, saepe fuga totam quibusdam similique iusto nulla, modi facilis ad odit doloremque vitae porro numquam, maiores quis natus? Inventore a ullam sit, doloribus nihil nostrum dicta ratione accusamus at labore placeat earum, quibusdam facere recusandae beatae, in accusantium tempora sint velit. Laborum temporibus, amet asperiores minima quis dolores vero, ducimus nulla fugit at neque dolore sunt odio, fuga veniam? Expedita fugiat est nobis? Totam, et dolores quam numquam officia, adipisci eligendi cumque nulla eum cum maxime? Obcaecati velit ad quo laboriosam consequuntur culpa! Maxime suscipit velit distinctio quaerat amet!</p>
            </div>
            <div className='project1_img'>
                <Image src='/weatherapp.png' alt='weather' width={500} height={300} priority />
            </div>
        </div>
    )
}

export default page