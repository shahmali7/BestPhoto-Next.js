
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className={styles.header}>
        <Link href='/'>
          <h1>Best Photos</h1>
        </Link>
        <nav>
           <ul className={styles.unList}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/#gallery'>Gallery</Link></li>
            <li><Link href='/Portfolio'>News</Link></li>
            <li><Link href='/Contact'>Contact</Link></li>
           </ul>
        </nav>
    </header>
  )
}

export default Navbar