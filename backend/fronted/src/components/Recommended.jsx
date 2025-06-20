import React from 'react'

const items = [
  { id: 1, name: 'Item 1', price: '$10', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for men' },
  { id: 2, name: 'Item 2', price: '$20', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for men' },
  { id: 3, name: 'Item 3', price: '$30', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for  how can we improve this' },
  { id: 4, name: 'Item 4', price: '$40', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for' },
  { id: 5, name: 'Item 5', price: '$40', img: 'src/images/shirt.png', text: 'T-shirt' },
  { id: 6, name: 'Item 6', price: '$10', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for men' },
  { id: 7, name: 'Item 7', price: '$20', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for men' },
  { id: 8, name: 'Item 8', price: '$30', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for  how can we improve this' },
  { id: 9, name: 'Item 9', price: '$40', img: 'src/images/shirt.png', text: 'T-shirt with multiple colors for' },
  { id: 10, name: 'Item 10', price: '$40', img: 'src/images/shirt.png', text: 'T-shirt with multiple colos for men' }
];

const Recommended = () => {
  return (
    <div className='w-full max-w-[1100px] mx-auto mt-2 rounded-lg p-3'>
      <p className='font-semibold text-xl'>Recommended Items</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3'>
        {items.map(item => (
          <div key={item.id + item.name} className='border border-gray-300 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <img src={item.img} alt={item.name} className='w-full h-32 object-cover mb-2 rounded-md' />
            <h3 className='text-lg font-semibold'>{item.price}</h3>
            <p className='text-gray-600'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommended