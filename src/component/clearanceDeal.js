import React,{useState} from 'react'

export default function ClearanceDeal() {
    const [clearance, setClearance] = useState([
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-01.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-02.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-03.png"
        },
        {
            imgSrc:"https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-04.png"
        }
    ])
  return (
   <>
       <div >
       <img className='w-75' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-title-01C.png" alt="" />

       </div>
   <div>
       {clearance.map((e,i)=>
       <img src={e.imgSrc} style={{width:"250px", marginLeft:"8px"}} />
       )}
   </div>
   
   </>
  )
}
