import React from 'react'
import styles from './main.module.css'

export default function Mainpage() {
  return (
    <section className={styles.main}>
      <div className=' flex flex-col items-center justify-center h-screen'>
        
        <div className='shadow-2xl ml-[480px] bg-white h-[100px] h-100px  align-items-center rounded-xl'>
        <h1 className='font-bold text-4xl ml-[80px]  '>
            HELLO THERE!!!!
          
          </h1>
            <h2 className='text-5xl font-light'>
                You get your gadgets!!!

            </h2>
            

        </div>
      </div>
     
   
    </section>
   
  )
}
