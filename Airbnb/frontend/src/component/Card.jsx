import React from 'react'
import { useContext } from 'react'
import { listingDataContext } from '../context/ListingContext.jsx'

function Card({data}){
    let {title,description,image1,rent,city,landmark} = data
    return(
        <div className='w-[330px] max-w-[85%] h-[460px] rounded-lg cursor-pointer b-slate-100 flex items-start justify-start flex-col '>
            <div className='w-[100%] h-[60%] overflow-hidden'>
                <img src={image1} alt="" className='w-[100%] h-[100%] object-cover'/>
            </div>
            <div className='w-[90%] h-[30%] flex items-start justify-start flex-col gap-[5px]'>
                <h1 className='text-[18px] font-bold text-ellipsis text-nowrap overflow-hidden'>{title}</h1>
                <p className='text-[16px] text-[#272727]'>{description}</p>
                <p className='text-[16px] text-[#272727] font-bold'>{`₹${rent} / night`}</p>
                <p className='text-[14px] text-[#272727]'>{`${landmark}, ${city}`}</p>
            </div>
        </div>
    )
}