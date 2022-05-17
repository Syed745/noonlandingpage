import React,{useState} from 'react'

export default function Footer(props) {
  return (
    <>
    
    <div className="ms-4 p-1 textCenter fontSize text-secondary">
      <p className='text-dark'><strong>{props.heading}</strong></p>
      <p className=' '>{props.mobile}</p>
      <p className=' '>{props.tablet}</p>
      <p className=' '>{props.laptop}</p>
      <p className=' '>{props.home}</p>
      <p className=' '>{props.camera}</p>
      <p className=' '>{props.television}</p>
      <p className=' '>{props.headphone}</p>
      <p className=' '>{props.videoGames}</p>
      
    </div>
  </>
  )
}
