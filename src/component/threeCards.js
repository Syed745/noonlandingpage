import React, { useState } from 'react'

export default function ThreeCards() {
    const [threeCard, setThreeCard] = useState([
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220512/eeab095cb62684f674a60cd9c0ce818d/en_dk_uae-sfb-01.png"
        }
    ])
    return (
        <>
            <div>
{threeCard.map((e,i)=>
<img src={e.imgSrc}   style={{width:"400px", paddingLeft:"10px" }} /> 
)}
            </div>
        </>
    )
}
