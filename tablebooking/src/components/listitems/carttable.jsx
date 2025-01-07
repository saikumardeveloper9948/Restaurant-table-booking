import {useEffect, useState } from "react";



const Cart = ({ cartItems, handleRemoveItem }) => {
  // State to manage count for each item
//   const [counter, setCounter] = useState(1);
  const [counts, setCounts] = useState(cartItems.map(() => 1));

      // Update counts when cartItems changes
  useEffect(() => {
    setCounts(cartItems.map(() => 1));
  }, [cartItems]);


//   const [CartItemsdelete, setCartItemsDelete] = useState(initialCartItems);

  // Function to handle count change for a specific item
  const handleCountChange = (index, newCount) => {
    if (newCount == 15) {
      alert("Can't order 1 item more than 15 pieces");
      newCount = 15; // Set count to the maximum allowed value
    } else if (newCount < 1) {
      newCount = 1; // Set count to the minimum allowed value
    }

    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
    
    // console.log(newCount)
    // console.log(parseInt(e.target.value))
  };

  // Function to handle item deletion
//   const handleDeleteItem = (index) => {
//     const updatedCartItems = cartItems.filter((_, i) => i !== index); // Remove the item
//     console.log(updatedCartItems);
//     const updatedCounts = counts.filter((_, i) => i !== index); // Remove the corresponding count
//     setCartItemsDelete(updatedCartItems);

//         // Notify the parent component of the deletion
//         onQuantityChange(index, null, updatedCartItems); // Pass the updated cart items to the parent

// // update the local state
//     setCounts(updatedCounts);
//   };





  // Calculate total price with validation
  const totalPrice = cartItems.reduce((total, item, index) => {
    const price = typeof item.price === "number" ? item.price : 0;
    const count = counts[index] || 1 ;
    return total + price * count;
  },0);

  return (
    <div className="container cart">
      <h2>Your Cart</h2>
      <table className="container border-2">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            {/* <th>Total</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="border-b">
          {cartItems.map((item, index) => (
            <tr key={index.id || index}>
              <td>{item.name}</td>
              <td className="flex gap-2" >
              <button
              
                  onClick={() =>
                    handleCountChange(index, counts[index] + 1)
                  }
                  disabled={counts[index] === 15}
                  className="bg-orange-500 p-2 rounded-s-full font-bold"
                >
            
                + </button>
                <h3>{counts[index]}</h3>
                <button
                  onClick={() =>
                    handleCountChange(index, counts[index] - 1)
                  }
                  disabled={counts[index] === 1}
                  className="bg-orange-500 p-2 rounded-e-full font-bold"
                >
                  -
                </button>
                {/* {itemcount()} */}
                {/* <input
                                    type="number"
                                    value={counts[index] || 0} // Default to 1 if count is invalid
                                    min="1"
                                    max="15"
                                    onChange={(e) => handleCountChange(index, parseInt(e.target.value))}
                                /> */}
              </td>

              <td>Rs.{(item.price*counts[index]).toFixed(2)}/-</td>
              {/* <td>Rs.{(item.price * (counts[index] || 1)).toFixed(2)}/-</td>` */}
              <td>
                <button
                    className="bg-none border-none cursor-pointer"
                  onClick={() => handleRemoveItem(index)}
                >
                  🗑️ {/* Delete icon */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-right">Total Price: Rs.{totalPrice.toFixed(2)}/-</h3>
    </div>
  );
};

export default Cart;
