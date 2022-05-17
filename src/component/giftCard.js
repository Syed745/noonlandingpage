import React,{useState} from 'react'
import imgSrc from '../images/spot1.png'
import imgSrc1 from '../images/spot3.png'
import imgSrc2 from '../images/women1.png'
export default function GiftCard() {
   
  return (
   <>
   <div className='p-3 mb-2' style={{backgroundColor: 'rgb(247, 247, 250)'}}>
       <img src={imgSrc} style={{width:'600px'}} />
       <img src={imgSrc1} style={{width:'300px'}} />
       <img src={imgSrc2} style={{width:'300px'}} />
   </div>
   <div>

       <img style={{width:'1250px'}} src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-strip-01G.png" className='p-1' />
   </div>
   </>
  )
}
