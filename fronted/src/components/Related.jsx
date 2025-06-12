import React from 'react'

const items = [
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  // Add more items as needed
];

const Related = () => {
  return (
    <div className='w-[90%] p-4 border border-gray-300 rounded-md mb-4  mx-auto h-[55vh]'>

      <div className='text-lg font-semibold'>Related Product</div>
      <div className='overflow-x-auto scrollbar-hide'>
      <div className='flex min-w-max'>
        {
          items.map((item,idx) => (
            <div key={idx} className=' flex gap-2 w-[30vh] p-3 m-2 rounded-md border border-gray-300 flex-col items-center justify-center'>
              <div className=''><img src={item.image} className='h-[25vh] w-[25vh] object-cover' alt="" /></div>
              <div>
                <p className='text-gray-500 text-sm'>{item.title} </p>
                <p className='text-gray-400 text-[12px]'>{item.oldPrice}-{item.price}</p>
              </div>
            </div>
          ))
        }

      </div>
      </div>

    </div>
  )
}

export default Related