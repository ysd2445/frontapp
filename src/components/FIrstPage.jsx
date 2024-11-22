import React from 'react'
import { useNavigate } from 'react-router-dom'
const FIrstPage = () => {
  const naviagte = useNavigate()
  const clickfunction = ()=>{
    naviagte("/browse")
  }
  return (
    <div onClick={clickfunction}>FIrstPage</div>
  )
}

export default FIrstPage