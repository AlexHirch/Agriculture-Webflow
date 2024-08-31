import React from 'react'
import { ImgHpE1_1, ImgHpE1_2, ImgHpE1_3 } from '../resource'
import { useNavigate } from 'react-router-dom'

const HpElement1 = () => {
  const navigate = useNavigate('')
  return (
    <div className="bgc f1f8f4">
      <div className='HpElement1 containCenter'>
        <div className="box">
            <img src={ImgHpE1_1} alt="" />
            <button  onClick={()=>navigate('/news/blog')}>Organic Juice</button>
        </div>
        <div className="box">
            <img src={ImgHpE1_2} alt="" />
            <button  onClick={()=>navigate('/news/blog')}>Organic Food</button>
        </div>
        <div className="box">
            <img src={ImgHpE1_3} alt="" />
            <button  onClick={()=>navigate('/news/blog')}>Nuts Cookis</button>
        </div>
    </div>
    </div>
  )
}

export default HpElement1