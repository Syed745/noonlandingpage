import React, { useState } from 'react';
import add from '../images/15%.png'
function Category(props) {
    const [arr, setArr] = useState([
        {
          title: "ALL CATEGORIES"
        },
        {
          title: "ELECTRONICS"
        },
        {
          title: "MEN"
        },
        {
          title: "WOMEN"
        },
        {
          title: "HOME"
        },
        {
          title: "BEAUTY&FRAGRANCE",
          space:"   "
        },
        {
          title: "BABY&TOYS",
          space:" "
        },
        {
          title: "GROCERY", 
          space:" "
        },
        {
          title: "SPORTS"
        },
        {
          title: "BEST SALLERS"
        },
        {
          title: "SELL ON NOON"
        }
      ])
    return (
        <>
        <div className=' w-75'>
        {arr.map((e, i) =>
            <strong className='fs6  category mx-2 py-4 text-center'>{e.title}</strong>
         )}
        </div>
        
        </>
    )
}

export default Category
