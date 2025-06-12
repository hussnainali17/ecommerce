import React from 'react'

const Detail = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 border border-gray-300 m-2 md:m-8'>
      {/* Image Section */}
      <div className='space-y-4 w-full md:w-1/3'>
        <div className='h-[200px] md:h-[300px] w-full flex flex-col border border-gray-300 rounded-lg bg-white'>
          <img src="src/images/shirt.png" alt="" className="object-contain h-full w-full" />
        </div>
        <div className='flex justify-between'>
          <img src="src/images/shirt.png" alt="" className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] border border-gray-300 object-cover' />
          <img src="src/images/shirt.png" alt="" className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] border border-gray-300 object-cover' />
          <img src="src/images/shirt.png" alt="" className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] border border-gray-300 object-cover' />
          <img src="src/images/shirt.png" alt="" className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] border border-gray-300 object-cover' />
          <img src="src/images/shirt.png" alt="" className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] border border-gray-300 object-cover' />
          <img src="src/images/shirt.png" alt="" className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] border border-gray-300 object-cover' />
        </div>
      </div>

      {/* Details Section */}
      <div className='flex flex-col ml-0 md:ml-4 space-y-4 w-full md:w-1/3'>
        <p className='text-green-500'>✓ In Stock</p>
        <p className='text-xl font-semibold'>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
        <div className='flex gap-5'>
          <p>⭐⭐⭐⭐⭐ 9.3</p>
          <p className='text-gray-500 flex justify-center gap-3 items-center'><i className="fa-solid fa-message"></i>32 Reviews  <i className="fa-solid fa-bucket"></i>154 Sold</p>
        </div>
        <div className='flex justify-between text-[12px] p-2 bg-orange-200'>
          <div className='flex flex-col pr-4 border-r border-r-gray-400'>
            <p className='text-red-600 '>$98.00</p>
            <p className='text-gray-500'>50-100 Pcs</p>
          </div>
          <div className='flex flex-col pr-2 border-r border-r-gray-400'>
            <p>$98.00-100.00</p>
            <p className='text-gray-500'>50-100 Pcs</p>
          </div>
          <div className='flex flex-col'>
            <p>$98.00-150.00</p>
            <p className='text-gray-500'>50-100 Pcs</p>
          </div>
        </div>
        <div className='flex gap-8 pb-1 text-[12px] border-b border-b-gray-400'>
          <p className='text-gray-400'>Price:</p>
          <p className='text-gray-700'>Negotiable</p>
        </div>
        <div className='flex gap-8 pb-3 text-[12px] border-b border-b-gray-400'>
          <div className='space-y-2'>
            <p className='text-gray-400'>Price:</p>
            <p className='text-gray-400'>Material:</p>
            <p className='text-gray-400'>Design:</p>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-700'>Classic Shoes</p>
            <p className='text-gray-700'>Plastic Material</p>
            <p className='text-gray-700'>Modern Design</p>
          </div>
        </div>
        <div className='flex gap-8 pb-3 text-[12px] border-b border-b-gray-400'>
          <div className='space-y-2'>
            <p className='text-gray-400'>Price:</p>
            <p className='text-gray-400'>Material:</p>
            <p className='text-gray-400'>Design:</p>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-700'>Classic Shoes</p>
            <p className='text-gray-700'>Plastic Material</p>
            <p className='text-gray-700'>Modern Design</p>
          </div>
        </div>
      </div>

      {/* Supplier Section */}
      <div className='flex flex-col border border-gray-300 p-5 rounded-md m-0 md:m-4 w-full md:w-1/3'>
        <div className='flex justify-center items-center gap-2 p-3 border-b border-b-gray-300'>
          <img src="src/images/Avatar.png" alt="" className='h-[40px] w-[40px] object-cover' />
          <div className='flex flex-col'>
            <p>Supplier</p>
            <p>Guanjoi Trading LLC</p>
          </div>
        </div>

        <div className='flex flex-col p-3 gap-3'>
          <div className='flex gap-5 items-center'>
            <img src="src/images/icon.png" className='h-[15px] w-[20px]' alt="" />
            <p>Germany</p>
          </div>
          <div className='flex gap-5 items-center'>
            <i className="fa-solid fa-globe"></i>
            <p>Verified Seller</p>
          </div>
          <div className='flex gap-5 items-center'>
            <i className="fa-solid fa-globe"></i>
            <p>World wide Shipping</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <button className='p-2 mt-2 bg-blue-500 text-sm text-white rounded-md'>Send Inquiry</button>
          <button className='p-2 mt-2 bg-white text-sm text-blue-600 border border-gray-400 rounded-md'>Seller Profile</button>
          <div className='flex justify-center items-center text-sm gap-2 p-2 mt-2 text-blue-600'><i className="fa-solid fa-heart"></i><p>Save for Later</p></div>
        </div>
      </div>
    </div>
  )
}

export default Detail