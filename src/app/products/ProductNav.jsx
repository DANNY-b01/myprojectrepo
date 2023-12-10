import React from 'react'
import Link from 'next/link'
import styles from "./productnav.module.css"

export default function ProductNav() {
  return (
    <nav className={styles.products}>
      <Link href='/products/All_products'>
        
      
      <li>
        All_product

      </li>
      </Link>

      <Link href='/products/Andriod'>
      
      <li>
        Andriods

      </li>
      </Link>

      <Link href='/products/More_product'>
      
      <li>
        MoreProducts

      </li>
      </Link>
      
      <Link href='/products/laptop'>
      
      <li>
        Laptop
      </li>
      </Link>
     
      <Link href='/products/Tablets'>
      
      <li>
        Tablets
      </li>
      </Link>
    </nav>
    
  )
}
