import { RiHomeSmileFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { IoHeartCircleSharp } from "react-icons/io5";
// import { RxVideo } from "react-icons/rx";
import { BsChatRightDots } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";


import  styles from "./navbar.module.css"


 import { Dancing_Script} from 'next/font/google'
 import Link from "next/link";

 
 const italin= Dancing_Script0({subsets:['latin']})

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        
            <ul>    
            <li className="flex flex-col">
                <strong>
                <span>GRAB.IT</span>
                </strong>
                
  
            </li>
            </ul>

        <ul>
            <Link href="/">
            <li>
           
            <span>Home</span>
            </li>
            </Link>
            <Link href="/delivery"> 
            <li>
                <span>Delivery</span>
            </li>
            </Link>

              <Link href="/products">
                <li>
          
                   <span>Products</span>
                </li>
            </Link>
            

                
            <Link href="/about ">
            <li>
                
                <span>About us</span>
            </li>
            </Link>

            <Link href="/contact ">
            <li>
               
            
                <span>Contact</span>
            </li>
            </Link>

            <li>
            <BsCart4 />
        
                <span></span></li>
           


          
        </ul>
  
    </nav>
  )
}
