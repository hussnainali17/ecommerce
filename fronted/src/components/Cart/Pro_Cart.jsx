import React from 'react';

const items = [
  {
    id: 1,
    image: "src/images/shirt.png",
    title: "T-shirts with multiple colors for men",
    price: "$78.99",
  },
  {
    id: 2,
    image: "src/images/g-1.png",
    title: "Solid Backpack blue jeans large size",
    price: "$78.99",
  },
  {
    id: 3,
    image: "src/images/g-2.png",
    title: "Water boiler black for kitchen, 1200 Watt",
    price: "$78.99",
  },
   {
    id: 2,
    image: "src/images/g-1.png",
    title: "Solid Backpack blue jeans large size",
    price: "$78.99",
  },
  {
    id: 3,
    image: "src/images/g-2.png",
    title: "Water boiler black for kitchen, 1200 Watt",
    price: "$78.99",
  },
];

const Pro_Cart = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-md border border-gray-300 md:w-[90%]">

      {/* Header for mobile */}
      <div className="p-4 border-b font-semibold text-lg block md:hidden">
        Shopping cart
      </div>

      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col md:flex-row items-start md:items-center border-b p-4 sm:p-6">

          {/* Image */}
          <div className="w-20 h-20 md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center mb-2 md:mb-0">
            <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
          </div>

          {/* Info */}
          <div className="flex-1 w-full md:ml-4">
            <div className="flex justify-between md:justify-between items-start">
              <p className="text-sm font-semibold md:text-base">{item.title}</p>
              <p className="text-sm font-semibold md:text-base">{item.price}</p>
            </div>

            <p className="text-gray-500 text-xs mt-1">
              Size: medium, Color: blue<br />
              Seller: Artel Market
            </p>

            <div className="flex justify-between items-center mt-2">
              {/* Quantity buttons for mobile look */}
              <div className="flex items-center border rounded-md px-2 py-1 text-sm gap-2">
                <button className="text-xl">−</button>
                <span>1</span>
                <button className="text-xl">+</button>
              </div>
              <div className="text-gray-500 text-lg">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>

            {/* Action Buttons (desktop only) */}
            <div className="hidden md:flex gap-3 mt-3">
              <button className='p-2 text-sm border border-gray-300 text-red-600 rounded-md'>Remove</button>
              <button className='p-2 text-sm border border-gray-300 text-blue-500 rounded-md'>Save for Later</button>
            </div>

          </div>
        </div>
      ))}

      {/* Footer (desktop buttons) */}
      <div className='hidden md:flex justify-between px-5 items-center m-6'>
        <button className='p-2 mt-2 bg-blue-500 text-sm text-white rounded-md'>
          <i className="fa-solid fa-arrow-left"></i> Back To Shop
        </button>
        <button className='p-2 mt-2 border border-gray-300 text-sm text-blue-500 rounded-md'>Remove All</button>
      </div>

    </div>
  );
};

export default Pro_Cart;


