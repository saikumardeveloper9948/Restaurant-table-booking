


import ProductCount from './itemquantity';

const Cart = ({ cartItems, onQuantityChange, count }) => {
    // Ensure count is a valid number
    const validCount = typeof count === 'number' ? count : 1;

    // Calculate total price with validation
    const totalPrice = cartItems.reduce((total, item) => {
        const price = typeof item.price === 'number' ? item.price : 0;
        const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
        return total + price * quantity * validCount;
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
                    </tr>
                </thead>
                <tbody className='border-b'>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                                <ProductCount
                                    quantity={item.quantity}
                                    onQuantityChange={(newQuantity) => onQuantityChange(index, newQuantity)}
                                />
                            </td>
                            <td>Rs.{item.price.toFixed(2)}/-</td>
                            <td>Rs.{(item.price * item.quantity * validCount).toFixed(2)}/-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 className='text-right'>Total Price: Rs.{totalPrice.toFixed(2)}/-</h3>
        </div>
    );
}



export default Cart;