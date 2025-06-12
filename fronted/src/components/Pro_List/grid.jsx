import React from 'react'

const Grid = ({ items }) => {
    return (
        <div className="w-full">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2 sm:p-6'>
                {items.map((item, idx) => (
                    <div key={item.id ? item.id + '-' + idx : idx} className='flex flex-col border-1 border-gray-300 p-4 rounded-lg bg-white'>
                        <div className="flex justify-center">
                            <img src={item.image} alt={item.title} className='w-[100px] h-[100px] object-contain mb-2' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex gap-2 items-center'>
                                <p className='font-semibold'>{item.price}</p>
                                <p className='text-gray-300 line-through'>{item.oldPrice}</p>
                            </div>
                            <p className='ml-2 text-amber-500'>{item.rating} <span className="text-gray-400">7.5</span></p>
                            <p className='text-gray-500 font-[12px] text-center'>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Grid