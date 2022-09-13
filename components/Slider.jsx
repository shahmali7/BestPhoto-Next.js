
import Image from 'next/image'
import React, { useState } from 'react'
import { SliderImages } from './SliderData'
import styles from '../styles/slider.module.css'
const Slider = ({SliderData}) => {
  const [now,setNow]=useState(0)
  const SliderLength= SliderData.length

  const nextSlide =()=>{
    setNow(now === length-1 ? 0 : length + 1)
  }
  const prevSlide =()=>{
    setNow(now === 0 ? length-1 : length - 1)
  }
  if(!Array.isArray(SliderData) || SliderData.length<=0){
    return null
  }
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

export default Slider