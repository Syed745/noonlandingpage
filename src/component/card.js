import React,{useState} from 'react'

export default function Card() {
    
 const [img, setImg] = useState([
    {
      imgSrc: "https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01.png"
    },
    {
      imgSrc: "https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_uae-mega-03.png"
    },
    {
      imgSrc: "https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01-frag.png"
    },
    {
      imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-mega-01.png"
    },
  ])

  return (
    <div className='text-center mt-5 p-5 bg-light '>
  {img.map((e,i)=>
 <img src= {e.imgSrc} style={{width:"270px",paddingLeft:"10px",}} />
  )}
</div>
  )
}
