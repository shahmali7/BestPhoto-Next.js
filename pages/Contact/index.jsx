

import React from 'react'
import styles from '../../styles/contact.module.css'



const Contact = () => {

  return (
    <div className={styles.contact}>
    <h1> Write a me Message </h1>
      <form className={styles.form} >
        <label>Your Name</label>
        <input placeholder='Name ...' maxLength={10} required className={styles.formMain}/>
        <label>Your Email</label>
        <input placeholder='Email ...' required type='email' className={styles.formMain}/>
        <label>Your Message</label>
        <input placeholder='Messages' type='text' required className={styles.main}/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact