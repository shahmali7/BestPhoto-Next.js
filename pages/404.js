
import React from 'react'
import {useRouter} from 'next/router'
const ErrorPage = () => {

    const router = useRouter()

    setTimeout(()=>{
       router.push('/')
    },2000)
  return (
    <div>This Page is not exist</div>
  )
}

export default ErrorPage