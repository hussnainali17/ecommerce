import React from 'react';

const Cart2 = () => {
  return (
    <div className="w-full border border-gray-300 p-4 md:p-7 rounded-md bg-white">

      {/* Coupon Section */}
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm md:text-base">Have a Coupon?</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <input
            type="text"
            placeholder="Add Coupon"
            className="flex-1 p-2 border border-gray-300 text-sm text-blue-500 rounded-md"
          />
          <button className="p-2 px-4 border border-gray-300 text-sm text-blue-500 rounded-md">
            Apply
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex flex-col items-center md:items-start border border-gray-300 p-4 rounded-md space-y-4">
        
        <div className="w-full border-b pb-2 border-gray-300 flex justify-between text-sm text-gray-600">
          <ul className="space-y-2">
            <li>Subtotal:</li>
            <li>Discount:</li>
            <li>Tax:</li>
          </ul>
          <ul className="space-y-2 text-right">
            <li>$1403.97</li>
            <li className="text-red-600">- $60.97</li>
            <li className="text-green-600">+ $14.97</li>
          </ul>
        </div>

        <div className="flex justify-between w-full font-semibold text-base md:text-lg">
          <p>Total :</p>
          <p className="text-green-700 text-xl">$1357.97</p>
        </div>

        <button className="w-full md:w-auto p-2 px-6 text-sm text-white bg-green-600 rounded-md">
          CheckOut
        </button>

        <div className="flex justify-center md:justify-start gap-2 flex-wrap">
          <img src="src/images/payment.png" alt="Visa" className="h-6" />
          <img src="src/images/payment-1.png" alt="Mastercard" className="h-6" />
          <img src="src/images/payment-2.png" alt="Stripe" className="h-6" />
          <img src="src/images/payment-3.png" alt="PayPal" className="h-6" />
          <img src="src/images/payment-4.png" alt="Apple Pay" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default Cart2;



// import React from 'react'

// const Cart2 = () => {
//   return (
//     <div className=''>
//         <div className=' border border-gray-300 p-7 mb-3 rounded-md'>
//             <p className='text-gray-500 mb-3'>Have a Coupon ?</p>
//             <div>
//                 <input type="text" name="" id="" placeholder='Add Coupon' className='p-2 border border-gray-300 text-sm text-blue-500 rounded-md' />
//                 <button className='p-2 border border-gray-300 text-sm text-blue-500 rounded-md'>Apply</button>
//             </div>
//         </div>
//         <div className='flex flex-col  items-center border border-gray-300 p-3 rounded-md space-y-3'>
//             <div className='flex justify-between border-b gap-4 border-gray-500'>
//                 <ul className='text-gray-500 space-y-2 '>
//                     <li>Subtotal:</li>
//                     <li>Discount:</li>
//                     <li>Tax:</li>
//                 </ul>
//                 <ul className='text-gray-500 space-y-2 '>
//                     <li>$1403.97</li>
//                     <li className='text-red-600'>- $60.97</li>
//                     <li className='text-green-600'>+ $14.97</li>
//                 </ul>
//             </div>
//             <div className='flex justify-between items-center'>
//                 <p className='font-semibold'>Total :</p>
//                 <p className='text-2xl font-semibold'>$1357.97</p>
//             </div>
//             <button className='p-2 px-12 text-sm text-white bg-green-600 rounded-md'>CheckOut</button>
//             <div className='flex gap-2'>
//                 <img src="src/images/payment.png" alt="" />
//                 <img src="src/images/payment-1.png" alt="" />
//                 <img src="src/images/payment-2.png" alt="" />
//                 <img src="src/images/payment-3.png" alt="" />
//                 <img src="src/images/payment-4.png" alt="" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Cart2