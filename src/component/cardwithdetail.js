import React,{useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
function Cardwithdetail(props) {
  return (
    <>
    
    <div className="me-2 p-1 textCenter">
      <img src={props.imgSrc} style={{width:"100px"}} />
      <p className='fs6 '>{props.title}</p>
      <p >AED <span className='fs-5'> {props.price}</span></p>
      <s className='fs6'>AED89</s> <b className='text-success fs6'>58% OFF</b> <br />
      <span className='fs6'>Arrives <b> Wed,May18</b></span>
      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" className='w-25' />
      <span className='text-warning  w25'>
      <StarRateIcon className='w25 ms-3' />
<span className='fs6'>4.1<i className='text-secondary'>(272)</i></span>
      </span>
    </div>
  </>
  )
}

export default Cardwithdetail