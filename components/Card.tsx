import React from 'react'

const Card = ({title,description, button}:{title?:string, description?:string, button?:string}) => {
  return (
    <div className='bg-gray-50 pl-8 py-6 pr-14 rounded-3xl items-start text-left w-1/2'>
        {/* {img&&<img src={img} alt="top-image"/>} */}
        <h2 className='heading text-[28px] !font-openSans font-bold'>{title}</h2>
        <p className='des text-neutral-600'>{description}</p>
        {button &&<button>{button}</button>}
    </div>
  )
}

export default Card