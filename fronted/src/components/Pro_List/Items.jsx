import React from 'react'

const Items = ({items}) => {
    return (
        <div className='flex flex-col w-full'>
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className='flex flex-row items-center border rounded-2xl border-gray-300 m-2 p-3 sm:m-5 sm:p-6 bg-white'
                >
                    <div className='w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center'>
                        <img src={item.image} alt={item.title} className="w-[70px] h-[70px] object-contain" />
                    </div>
                    <div className='flex flex-col gap-1 p-2 text-sm flex-1'>
                        <p className='font-semibold text-[15px] sm:text-base'>{item.title}</p>
                        <div className='flex gap-2 items-center'>
                            <p className='text-[15px] sm:text-base font-semibold'>{item.price}</p>
                            <p className='text-gray-300 line-through text-xs sm:text-sm'>{item.oldPrice}</p>
                        </div>
                        <p className='text-amber-500 text-xs sm:text-sm'>{item.rating} <span className="text-gray-400">7.5</span></p>
                        {/* Hide description and view details on mobile */}
                        <p className='text-gray-500 text-[13px] hidden sm:block'>
                            {item.description.split('tempor').map((part, i, arr) =>
                                i < arr.length - 1
                                    ? <>{part}tempor<br /></>
                                    : part
                            )}
                        </p>
                        <p className='text-blue-500 hidden sm:block'>View Details</p>
                    </div>
                    {/* Hide heart icon on mobile */}
                    <i className="fa-regular fa-heart border-1 border-gray-300 p-2 h-8 rounded-md text-blue-600 hidden sm:inline-block"></i>
                </div>
            ))}
        </div>
    )
}

export default Items