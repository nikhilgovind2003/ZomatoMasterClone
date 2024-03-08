import React from 'react'

const Card = (props) => {
  return (
    <div className=' w-[50%]'>
        <div className=' lg:w-[500px] mt-10 border border-spacing-2 rounded-xl border-gray-200'>
            <div className=' w-full h-[150px]'>
                <img className=' w-full object-cover h-[150px] rounded-tl-xl rounded-tr-xl' src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
            </div>
            <div className=' p-4'>
                <h1 className=' text-xl'>{props.title}</h1>
                <h2 className=' tex-md'>{props.sub}</h2>
            </div>
        </div>
    </div>
  )
}

export default Card