
import Image from 'next/image'
import React from 'react'
import { SliderImages } from '../../components/SliderData'
import styles from '../../styles/Gallery.module.css'
const Gallery = () => {
  
  return (
    <div className={styles.container}>
        <h1>Gallery</h1>
        <div className={styles.images}>
            {SliderImages.map((image,index)=>{
                return(
                    <div key={index} >
                      <Image src={image.image} alt='' height='300' width='400' style={{objectFit:'contain'}} className={styles.photo}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default Gallery