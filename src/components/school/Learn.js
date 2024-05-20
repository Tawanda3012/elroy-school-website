import React from 'react'

const Learn = ({Icon, text, Tm,text1}) => {
  return (
    <div className="Learn__Main">
      
    {Icon ? <Icon className={Tm}/> : ''}
    <p>{text1}</p>
    <p>{text}
    </p>
   
</div>
  )
}

export default Learn