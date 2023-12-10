import React from 'react'
// import SocialIcons from './Socialions'
import styles from "./footer.module.css"
import SocialIcons from './Socialions'



// import {  Roboto_400Latin } from 'next/font/google'

// const italin=Roboto_400Latin({subsets:['latin']})

export default function Footer(){
    return (
    <footer>
              
     <nav className={styles.nav}>
        
            <span>
                GRAB.IT
        </span>
           
        
        {/* <ul>    
            <li className="flex flex-col">
                <span>GRAB</span>
                
            <span className={italin.className}>.IT</span></li>
        </ul> */}
            <ul>
            <li>
           
            <span>Home</span></li>
            <li>
                <span>Recipes</span></li>
            <li>
                <span>Favourite</span></li>
            <li>
             
                <span>Video recipes</span></li>
            <li>
            
                <span>Blog</span></li> 
            <li>
           
                <span>About us</span></li>
            <li>
           
            
                <span>Contact</span></li>
        









            </ul>
            <p>
              <SocialIcons />
            </p>
       </nav>
       <p>
        
       </p>

        </footer>
    )
}