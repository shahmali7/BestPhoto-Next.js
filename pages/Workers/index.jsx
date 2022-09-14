

import styles from '../../styles/Customers.module.css'
import React from 'react'

const Workers = ({data}) => {
  console.log(data);
  return (
    <div className={styles.contain}>
        <h1>Our Workers</h1>
        <div className={styles.workers}>

         {
            data.map((man)=>{
                return(
                    <div key={man.id} className={styles.employee}>
                         <h3>Name : {man.name} </h3>
                         <p>Email : {man.email} </p>
                         <p>Location : {man.address.city}</p>
                    </div>
                )
            })
         }
        </div>
    </div>
  )
}

export default Workers

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data);
    return {
      props : {
        data,
      }
    }
}