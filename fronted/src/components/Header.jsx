import React, { useState } from 'react';
import MobileMenu from './Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="block md:hidden w-full p-2 space-y-2 bg-white shadow-sm">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Hamburger */}
            <button onClick={() => setIsMenuOpen(true)}>
              <i className="fa-solid fa-bars text-xl text-gray-600" />
            </button>

            {/* Logo + Brand */}
            <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
              <img src="src/images/logo.png" alt="logo" className="w-8 h-8 object-contain" />
            </div>
            <h1 className="text-blue-400 text-2xl font-bold">Brand</h1>
          </div>

          {/* Icons */}
          <div className="flex gap-4 text-gray-500 text-lg">
            <i className="fa-solid fa-cart-shopping" />
            <i className="fa-solid fa-user" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex w-full rounded-md overflow-hidden border-2 border-blue-500">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-3 py-2 text-sm text-gray-700 focus:outline-none"
          />
          <select className="px-3 py-2 text-sm text-gray-700 border-l border-gray-300 focus:outline-none">
            <option>All category</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
            Search
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-2 mt-1 pb-1">
          {['All category', 'Gadgets', 'Clothes', 'Accessories'].map((item, index) => (
            <button
              key={index}
              className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600 bg-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex w-full h-[86px] items-center justify-between px-4 md:px-12 py-2">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
            <img src="src/images/logo.png" alt="" className="w-8 h-8 object-contain" />
          </div>
          <h1 className="text-blue-400 text-2xl md:text-4xl font-bold">Brand</h1>
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-xl rounded-md overflow-hidden border-2 border-blue-500 mb-2 md:mb-0">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-2 md:px-4 py-2 text-sm text-gray-700 focus:outline-none"
          />
          <select className="px-2 md:px-4 py-2 text-sm text-gray-700 border-l border-gray-300 focus:outline-none">
            <option>All category</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 py-2 text-sm font-medium">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className='text-gray-500 flex gap-4 md:gap-7 text-lg md:text-xl'>
          <div className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-user"></i>
            <p className='text-[10px]'>Profile</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-message"></i>
            <p className='text-[10px]'>Messages</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-heart"></i>
            <p className='text-[10px]'>Orders</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-cart-shopping"></i>
            <p className='text-[10px]'>Cart</p>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;



// import React from 'react';

// const Header = () => {
//   return (
//     <>
//       {/* ---------------------- Mobile View ---------------------- */}
//       <div className="block md:hidden w-full p-2 space-y-2">
//         {/* Top Row: Hamburger + Brand + Icons */}
//         <div className="flex items-center justify-between">
//           {/* Left: Hamburger + Logo */}
//           <div className="flex items-center gap-2">
//             <i className="fa-solid fa-bars text-xl text-gray-600" />
//             <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
//               <img src="src/images/logo.png" alt="logo" className="w-8 h-8 object-contain" />
//             </div>
//             <h1 className="text-blue-400 text-2xl font-bold">Brand</h1>
//           </div>

//           {/* Right Icons */}
//           <div className="flex gap-4 text-gray-500 text-lg">
//             <i className="fa-solid fa-cart-shopping" />
//             <i className="fa-solid fa-user" />
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="flex w-full rounded-md overflow-hidden border-2 border-blue-500">
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-grow px-3 py-2 text-sm text-gray-700 focus:outline-none"
//           />
//           <select className="px-3 py-2 text-sm text-gray-700 border-l border-gray-300 focus:outline-none">
//             <option>All category</option>
//             <option>Books</option>
//             <option>Electronics</option>
//             <option>Clothing</option>
//           </select>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
//             Search
//           </button>
//         </div>

//         {/* Horizontal Category Pills */}
//         <div className="flex overflow-x-auto gap-2 mt-1">
//           {['All category', 'Gadgets', 'Clothes', 'Accessories', 'Mobiles'].map((item, index) => (
//             <button
//               key={index}
//               className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600 bg-white"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ---------------------- Desktop View ---------------------- */}
//       <div className='hidden md:flex w-full h-[86px] items-center justify-between px-4 md:px-12 py-2'>
//         {/* Logo and Brand */}
//         <div className="flex items-center space-x-2">
//           <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
//             <img src="src/images/logo.png" alt="" className="w-8 h-8 object-contain" />
//           </div>
//           <h1 className="text-blue-400 text-2xl md:text-4xl font-bold">Brand</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex w-full max-w-xl rounded-md overflow-hidden border-2 border-blue-500">
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none"
//           />
//           <select className="px-4 py-2 text-sm text-gray-700 border-l border-gray-300 focus:outline-none">
//             <option>All category</option>
//             <option>Books</option>
//             <option>Electronics</option>
//             <option>Clothing</option>
//           </select>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
//             Search
//           </button>
//         </div>

//         {/* Icons */}
//         <div className='text-gray-500 flex gap-7 text-xl'>
//           <div className='flex flex-col items-center justify-center gap-1'>
//             <i className="fa-solid fa-user"></i>
//             <p className='text-[10px]'>Profile</p>
//           </div>
//           <div className='flex flex-col items-center justify-center gap-1'>
//             <i className="fa-solid fa-message"></i>
//             <p className='text-[10px]'>Messages</p>
//           </div>
//           <div className='flex flex-col items-center justify-center gap-1'>
//             <i className="fa-solid fa-heart"></i>
//             <p className='text-[10px]'>Orders</p>
//           </div>
//           <div className='flex flex-col items-center justify-center gap-1'>
//             <i className="fa-solid fa-cart-shopping"></i>
//             <p className='text-[10px]'>Cart</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;





// import React from 'react'

// const Header = () => {
//   return (
//     <div className='w-screen h-[86px] flex items-center justify-around  '>
//     <div className="flex items-center space-x-2">
//   {/* Icon Box with Right Side Shadow */}
//   <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
//     <img src="src\images\logo.png" alt="" />
//   </div>

//   {/* Brand Name */}
//   <h1 className="text-blue-400 text-4xl font-bold">Brand</h1>
// </div>
// <div className="flex w-full max-w-xl rounded-md overflow-hidden border-2 border-blue-500">
//         <input
//           type="text"
//           placeholder="Search"
//           className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none "
//         />
//         <select className="px-4 py-2 text-sm text-gray-700 border-l border-gray-300 focus:outline-none">
//           <option>All category</option>
//           <option>Books</option>
//           <option>Electronics</option>
//           <option>Clothing</option>
//         </select>
//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
//           Search
//         </button>
//       </div>

//       <div className='text-gray-500 flex gap-7 text-xl '>
//         <div className='flex flex-col items-center justify-center gap-1'>
//           <i className="fa-solid fa-user"></i>
//         <p className='text-[10px]'>Profile</p>
//         </div>
//         <div className='flex flex-col items-center justify-center gap-1'>
//           <i className="fa-solid fa-message"></i>
//         <p className='text-[10px]'>Messages</p>
//         </div>
//         <div className='flex flex-col items-center justify-center gap-1'>
//           <i className="fa-solid fa-heart"></i>
//         <p className='text-[10px]'>Orders</p>
//         </div>
//         <div className='flex flex-col items-center justify-center gap-1'>
//           <i className="fa-solid fa-cart-shopping"></i>
//         <p className='text-[10px]'>Cart</p>
//         </div>
        
        
        
        
//       </div>



//     </div>
   
//   )
// }

// export default Header

