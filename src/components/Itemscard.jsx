// import React, { useState, useEffect } from 'react';
// import ItemsCard from './ItemsCard';

import Image from "next/image";
import { useEffect } from "react";
import { useFetch } from "use-fetch-react-vc";
import { apiUrl, fetchOptions } from "../app/constant";

// const ParentComponent = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => setItems(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   // Check if items is an array
//   if (!Array.isArray(items)) {
//     // If not an array, display an error message or loading indicator
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {items.map((item, index) => (
//         <ItemsCard
//           key={index}
//           item={{
//             imageUrl: item.thumbnail, // Replace 'image' with the actual property name in your API
//             name: item.title1,
//             price: item.price, // Replace 'price' with the actual property name in your API
//             quantity: item.quantity, // Replace 'quantity' with the actual property name in your API
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ParentComponent;
// import React, { useState, useEffect } from 'react';
// import ItemsCard from './ItemsCard';

// const ParentComponent = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => setItems(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   // Check if items is an array
//   if (!Array.isArray(items)) {
//     // If not an array, display an error message or loading indicator
//     return <div className='text-smm'>Loading...</div>;
//   }

//   return (
//     <div>
//       {items.map((item, index) => (
//         <ItemsCard key={index} item={item} />
//       ))}
//     </div>
//   );
// };

// export default ParentComponent;

const ItemsCard = ({ setSubtotal }) => {
  const { data, error, loading } = useFetch(apiUrl, fetchOptions);
  const myIndex = 1;

  useEffect(() => {
    if (!error && !loading && data) {
      let total = 0;
      data.products.forEach((item) => {
        if (item.id <= myIndex + 1) total += item.price;
      });
      setSubtotal(total);
    }
  }, [error, loading, data, setSubtotal]);

  return (
    <div className="overflow-y-auto" >
      {!loading && !error && data && (
        <div className="grid grid-rows-1">
          {data?.products.map((item, index) => {
            if (index > myIndex) return;
            return (
                <div className="grid grid-cols-2" key={item.id}>
                <div>
                  <img
                    src={item.thumbnail}
                    width={400}
                    height={400}
                    alt={item.title}
                    style={{ width: "50%", height: "90%" }}
                    className="h-1 cursor-pointer top-3 bottom-3"
                  />
                </div>
                <div className="text-smm">
                  <p>{item.title}</p>
                  <p>Price: {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* <div>
          <img
            src="https://alamfarma.com/cdn/shop/files/Matrix-C60_20ml_LEGALIZED_2023.jpg?v=1698292786&width=50"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
            className="h-1 cursor-pointer top-3 bottom-3"
          />
        </div>
        <div className="text-smm">
          <p>Glow Toner + Sunscreen - 20ml</p>
          <p>Price: $500</p>
          <p>Quantity: 1</p>
        </div> */}
    </div>
  );
};

export default ItemsCard;

// import React from 'react';

// const ItemsCard = ({ item }) => {
//   // Check if item is defined and is an object
//   if (!item || typeof item !== 'object') {
//     // Handle the case where item is undefined or not an object
//     return <div className='TEXT'>No item data available</div>;
//   }

//   // Destructure properties from the item
//   const { name, price, quantity, imageUrl } = item;

//   return (
//     <div>
//       <div className='flex'>
//         <div>
//           <img
//             src={imageUrl}
//             alt="logo"
//             style={{ width: '100%', height: '100%' }}
//             className="h-1 cursor-pointer top-3 bottom-3"
//           />
//         </div>
//         <div className='text-smm'>
//           <p>{name}</p>
//           <p>Price: {price}</p>
//           <p>Quantity: {quantity}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemsCard;