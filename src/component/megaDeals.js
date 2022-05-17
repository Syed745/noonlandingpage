import React,{useState} from 'react'

export default function MegaDeals() {
    const [first, setfirst] = useState([
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-04.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220516/4f2f689e2774faa782f5541f7198af0d/en_mb_uae-mega-01.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-02.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-01.png"
        },
    ])
  return (
    <>
    <div style={{background:"rgb(250, 242, 156)"}} className="p-3 mt-5">

    <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png" alt="" />
    <div className='text-center'>
        {first.map((e,i)=>
        <img src={e.imgSrc} style={{width:"250px", marginLeft:"8px"}}  />
        )}
    </div>
        </div>
    </>
  )
}
