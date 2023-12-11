import React from 'react';
import styles from './delivery.module.css'  
import Link from 'next/link';


export default function Delivery() {

 const first = (
    <div>
  <form className="flex items-center justify-center">
    
    <input type="text" name="search" id="search" placeholder="Home -> Delivery" className="w-2/3 outline-none rounded-[40px] border-2 border-gray-700 border-solid p-4 " defaultValue/>
  </form>


  </div>
 )





 
   const Content =(<div className={styles.container}>
     
      
      <h1 className={styles.title}>Delivery Info</h1>

      <div className='flex'>
      <p className='text-justify w-3/5'>
        A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer's mood when they see your ad.
      </p>

      <div className={styles.other}>
        <p className={styles.pr}>Cant Find the Answer <br />to Your Question?</p>
        <Link href='#'>
        <button className={styles.btn1}>Contact us</button>
        </Link>
      </div>
      </div>

      
      <div className={styles.richTextSection}>
        <h2 className={styles.sectionTitle}>What’s a Rich Text element?</h2>
        <p className={styles.sectionContent}>
          The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
        </p>
      </div>

     
      <div className={styles.richTextSection}>
        <h2 className={styles.sectionTitle}>Static and dynamic content editing</h2>
        <p className={styles.sectionContent}>
          A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.
        </p>
        <ul>
          <li className={styles.listItem}>Beautifully Designed</li>
          <li className={styles.listItem}>100% Responsive</li>
          <li className={styles.listItem}>CMS Content</li>
          <li className={styles.listItem}>Smooth Animations</li>
        </ul>
         <br />
        <p>For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
      </div>
        <br />
      <div>
        <h2 className={styles.sectionTitle}>How to customize formatting for each rich text</h2>
        <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the When inside of nested selector system.</p>
      </div>

      
     
    </div>
   );
  

    return (
    <div>
    {first}
    {Content}
  </div>
)

}