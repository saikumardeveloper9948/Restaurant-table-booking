import  { useState } from "react";

const Cart = ({ cartItems, onQuantityChange ,initialCartItems  }) => {
    // State to manage count for each item
    const [counts, setCounts] = useState(cartItems.map(() => 1));
    const [CartItems, setCartItems] = useState(initialCartItems);

    // Function to handle count change for a specific item
    const handleCountChange = (index, newCount) => {
        if (newCount >= 15) {
            alert("Can't order 1 item more than 15 pieces");
            newCount = 15; // Set count to the maximum allowed value
        } else if (newCount < 1) {
            newCount = 1; // Set count to the minimum allowed value
        }

        const newCounts = [...counts];
        newCounts[index] = newCount;
        setCounts(newCounts);
        onQuantityChange(index, newCount); // Notify parent component of quantity change
    };

    // Function to handle item deletion
    const handleDeleteItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index); // Remove the item
        const updatedCounts = counts.filter((_, i) => i !== index); // Remove the corresponding count
        setCartItems(updatedCartItems);
        setCounts(updatedCounts);
       
    };


    // Calculate total price with validation
    const totalPrice = cartItems.reduce((total, item, index) => {
        const price = typeof item.price === 'number' ? item.price : 0;
        const count = counts[index] || 1;
        return total + price * count;
    }, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <table className='container border'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='border-b'>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                                <input
                                    type="number"
                                    value={counts[index] || 1} // Default to 1 if count is invalid
                                    min="1"
                                    max="15"
                                    onChange={(e) => handleCountChange(index, parseInt(e.target.value))}
                                />
                            </td>
                            <td>Rs.{item.price.toFixed(2)}/-</td>
                            <td>Rs.{(item.price * (counts[index] || 1)).toFixed(2)}/-</td>
                            <td>
                                <button
                                    onClick={() => handleDeleteItem(index)}
                                    style={{ background: "none", border: "none", cursor: "pointer" }}
                                >
                                    🗑️ {/* Delete icon */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 className='text-right'>Total Price: Rs.{totalPrice.toFixed(2)}/-</h3>
        </div>
    );
}

export default Cart;