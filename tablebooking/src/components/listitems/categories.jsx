import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from './carttable';
import Modal from 'react-bootstrap/Modal'; 


const foodItems = [
  {
    category: "Vegetarian",
    items: [
      // Existing Items
      {
        name: "Paneer Butter Masala",
        image: "https://img.freepik.com/premium-photo/paneer-butter-masala-white-plate-white-background_864588-11304.jpg",
        rating: "⭐⭐⭐⭐⭐",
        description: "Cottage cheese in a creamy tomato gravy",
        price: 250,
        quantity: 20,
        serves: 40,
      },
      {
        name: "Aloo Gobi",
        image: "https://static.vecteezy.com/system/resources/thumbnails/036/289/645/small_2x/ai-generated-aloo-gobi-with-transparent-background-ai-png.png",
        rating: "⭐⭐⭐⭐✰",
        description: "Potato and cauliflower stir-fried with spices",
        price: 180,
        quantity: 25,
        serves: 50,
      },
      {
        name: "Vegetable Biryani",
        image: "https://wallpapers.com/images/high/colorful-vegetable-biryani-dish-7iy413ch73lgcd67-2.png",
        rating: "⭐⭐⭐⭐⭐",
        description: "Aromatic rice cooked with vegetables and spices",
        price: 220,
        quantity: 30,
        serves: 90,
      },
      {
        name: "Palak Paneer",
        image: "https://img.freepik.com/premium-photo/palak-paneer-image-white-background_762785-259801.jpg",
        rating: "⭐⭐⭐⭐✰",
        description: "Cottage cheese in a creamy spinach curry",
        price: 240,
        quantity: 15,
        serves: 30,
      },
      {
        name: "Dal Tadka",
        image: "https://png.pngtree.com/png-vector/20240818/ourmid/pngtree-whole-yellow-lentil-dal-tadka-or-fry-with-jeera-png-image_13528759.png",
        rating: "⭐⭐⭐⭐⭐",
        description: "Yellow lentils tempered with spices and herbs",
        price: 160,
        quantity: 40,
        serves: 80,
      },
      // Additional Items
      {
        name: "Chana Masala",
        image: "https://tse4.mm.bing.net/th?id=OIP.Kgm3OU51i_LSy0Q06KWErgAAAA&pid=Api&P=0&h=180",
        rating: "⭐⭐⭐⭐✰",
        description: "Spicy chickpea curry cooked in a tangy tomato sauce",
        price: 190,
        quantity: 20,
        serves: 40,
      },
      {
        name: "Bhindi Masala",
        image: "https://static.vecteezy.com/system/resources/previews/027/144/456/original/tasty-okra-or-bhindi-on-background-free-png.png",
        rating: "⭐⭐⭐⭐⭐",
        description: "Okra stir-fried with onions and spices gives a nice crunch",
        price: 170,
        quantity: 15,
        serves: 30,
      },
      {
        name: "Paneer Tikka Masala",
        image: "https://img.freepik.com/premium-photo/indian-paneer-tikka-masala-curry-with-cooked-rice-selective-focus-white-background_57665-1803.jpg",
        rating: "⭐⭐⭐⭐⭐",
        description: "Grilled cottage cheese cooked in a spicy gravy",
        price: 260,
        quantity: 20,
        serves: 40,
      },
    ],
  },
  {
    category: "Non-Vegetarian",
    items: [
      // Existing Items
      {
        name: "Butter Chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYDxfn9UgUUtMvjcvZmS9iKOcnUa5ZYYdFA&s",
        rating: "⭐⭐⭐⭐⭐",
        description: "Chicken cooked in a rich creamy gravy will make you fall in love",
        price: 300,
        quantity: 25,
        serves: 50,
      },
      {
        name: "Mutton Rogan Josh",
        image: "https://cdn.create.vista.com/api/media/small/629454412/stock-photo-indian-style-mutton-gosht-masala-indian-lamb-meat-rogan-josh",
        rating: "⭐⭐⭐⭐✰",
        description: "Slow-cooked lamb curry with spices and herbs",
        price: 350,
        quantity: 10,
        serves: 20,
      },
      {
        name: "Chicken Biryani",
        image: "https://i.pinimg.com/474x/67/e7/ff/67e7ff9859d6c9df0c30b897bf901e1d.jpg",
        rating: "⭐⭐⭐⭐⭐",
        description: "Fragrant rice cooked with chicken and spices",
        price: 280,
        quantity: 35,
        serves: 105,
      },
      {
        name: "Fish Curry",
        image: "https://www.priyom.in/wp-content/uploads/2022/05/recipe-3-480x270.png",
        rating: "⭐⭐⭐⭐✰",
        description: "Fish cooked in a tangy, spicy curry and served with rice",
        price: 320,
        quantity: 20,
        serves: 40,
      },
      {
        name: "Egg Curry",
        image: "https://img.freepik.com/premium-photo/top-view-egg-curry-white-background_601128-2167.jpg",
        rating: "⭐⭐⭐⭐⭐",
        description: "Boiled eggs in a flavorful curry with spices",
        price: 180,
        quantity: 50,
        serves: 100,
      },
      // Additional Items
      {
        name: "Tandoori Chicken",
        image: "https://angtnonions.com/wp-content/uploads/2022/02/Tandouri-Chicken.png",
        rating: "⭐⭐⭐⭐⭐",
        description: "Marinated chicken roasted in a tandoor oven and taste is good" ,
        price: 320,
        quantity: 20,
        serves: 40,
      },
      {
        name: "Prawn Masala",
        image: "https://png.pngtree.com/png-vector/20240717/ourmid/pngtree-goan-prawns-or-shrimp-curry-zinga-masala-also-known-as-kolambi-png-image_13053662.png",
        rating: "⭐⭐⭐⭐✰",
        description: "Prawns cooked in a spicy and tangy gravy",
        price: 360,
        quantity: 15,
        serves: 30,
      },
      {
        name: "Lamb Kebabs",
        image: "https://png.pngtree.com/png-clipart/20220927/original/pngtree-kebab-fresh-lamb-png-image_8637537.png",
        rating: "⭐⭐⭐⭐⭐",
        description: "Juicy lamb kebabs grilled to perfection and served with a side of mint chutney",
        price: 300,
        quantity: 10,
        serves: 20,
      },
    ],
  },
{
  category: "Noodles",
  items: [
    // Existing Items
    {
      name: "Hakka Noodles",
      image: "https://thumbs.dreamstime.com/b/chilli-garlic-hakka-noodles-black-bowl-isolated-white-background-indo-chinese-vegetarian-cuisine-dish-indian-veg-187539807.jpg",
      rating: "⭐⭐⭐⭐✰",
      description: "Stir-fried noodles with vegetables and spices",
      price: 200,
      quantity: 30,
      serves: 90,
    },
    {
      name: "Chicken Noodles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSV03E8fhtYGPtR-VCf3AY035Ox9JBXvUdvQ&s",
      rating: "⭐⭐⭐⭐⭐",
      description: "Stir-fried noodles with chicken and spices",
      price: 250,
      quantity: 25,
      serves: 75,
    },
    {
      name: "Egg Noodles",
      image: "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-stir-fried-noodles-isolated-png-image_11468959.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "Noodles stir-fried with eggs, veggies and spices",
      price: 230,
      quantity: 20,
      serves: 60,
    },
    {
      name: "Chili Garlic Noodles",
      image: "https://myblacktree.com/cdn/shop/files/plain-chow-mein-02-removebg-preview.png?v=1691150653",
      rating: "⭐⭐⭐⭐✰",
      description: "Spicy noodles with a chili garlic sauce and veggies",
      price: 220,
      quantity: 30,
      serves: 90,
    },
    {
      name: "Schezwan Noodles",
      image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-schezwan-noodles-or-szechuan-vegetable-png-image_11919080.png",
      rating: "⭐⭐⭐⭐✰",
      description: "Noodles tossed in a spicy Schezwan sauce",
      price: 240,
      quantity: 35,
      serves: 105,
    },
    // Additional Items
    {
      name: "Thai Rice Noodles",
      image: "https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-pad-thai-thailand-cuisine-delicious-noodle-food-painting-png-image_11666229.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "Flat noodles with a hint of coconut milk and Thai spices",
      price: 260,
      quantity: 20,
      serves: 60,
    },
    {
      name: "Yakisoba Noodles",
      image: "data:image/jpeg;base64,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",
      rating: "⭐⭐⭐⭐✰",
      description: "Japanese-style stir-fried noodles with veggies and soy sauce",
      price: 280,
      quantity: 15,
      serves: 45,
    },
    {
      name: "Ramen Noodles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR88pXk2Gqh1TM0ba3ZCN2iSluS_WrqiJi1Xg&s",
      rating: "⭐⭐⭐⭐⭐",
      description: "Hot and comforting ramen bowl with rich broth and toppings",
      price: 300,
      quantity: 25,
      serves: 75,
    },
  ],
},
{
  category: "Desserts",
  items: [
    // Existing Items
    {
      name: "Gulab Jamun",
      image: "https://static.vecteezy.com/system/resources/thumbnails/049/500/928/small_2x/gulab-jamun-in-a-plate-isolated-on-transparent-background-free-png.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "Sweet dumplings soaked in sugar syrup and cardamom",
      price: 120,
      quantity: 50,
      serves: 100,
    },
    {
      name: "Ice Cream Sundae",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKu57nC0winScq6WXTt8n9ZcKlGqjL9Mt-AQ&s",
      rating: "⭐⭐⭐⭐⭐",
      description: "Ice cream topped with nuts and chocolate syrup",
      price: 150,
      quantity: 40,
      serves: 40,
    },
    {
      name: "Brownie with Ice Cream",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEeWtM5ujtlVD5jmcAg0jt3NazgQPPCqRBw&s",
      rating: "⭐⭐⭐⭐⭐",
      description: "Warm brownie served with vanilla ice cream",
      price: 180,
      quantity: 20,
      serves: 20,
    },
    {
      name: "Rasmalai",
      image: "https://kummaleelala.com/wp-content/uploads/2024/08/Rasmalai-1-Cup.png",
      rating: "⭐⭐⭐⭐✰",
      description: "Soft cheese discs in flavored milk and nuts",
      price: 140,
      quantity: 25,
      serves: 50,
    },
    {
      name: "Cheesecake",
      image: "https://img.pikbest.com/origin/10/41/12/60KpIkbEsTFeJ.png!sw800",
      rating: "⭐⭐⭐⭐⭐",
      description: "Creamy cheesecake with a biscuit base and fruit topping",
      price: 200,
      quantity: 15,
      serves: 15,
    },
    // Additional Items
    {
      name: "Tiramisu",
      image: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-glass-of-tiramisu-garnished-with-mint-leaves-png-image_13653140.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "Classic Italian coffee-flavored dessert and mascarpone cheese",
      price: 220,
      quantity: 10,
      serves: 10,
    },
    {
      name: "Mango Pudding",
      image: "https://img.pikbest.com/origin/09/06/96/21ipIkbEsTuj9.png!sw800",
      rating: "⭐⭐⭐⭐✰",
      description: "Silky mango pudding with a creamy texture",
      price: 140,
      quantity: 30,
      serves: 30,
    },
    {
      name: "Fruit Custard",
      image: "https://t3.ftcdn.net/jpg/09/57/47/44/360_F_957474415_T8kObsqH6RDm1h0fr1WP7dvmBOjDD8as.jpg",
      rating: "⭐⭐⭐⭐⭐",
      description: "Mixed fruits in a creamy custard base and nuts",
      price: 160,
      quantity: 20,
      serves: 40,
    },
  ],
},
{
  category: "Mocktails",
  items: [
    // Existing Items
    {
      name: "Virgin Mojito",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-1c5QRXfn8z6Sdlc94LkSacO_tRgk7e0zw&s",
      rating: "⭐⭐⭐⭐✰",
      description: "Refreshing drink made with lime, mint, without any rum",
      price: 120,
      quantity: 35,
      serves: 35,
    },
    {
      name: "Pina Colada",
      image: "https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-pina-colada-with-pineapple-slice-and-cherry-png-image_12511808.png",
      rating: "⭐⭐⭐⭐✰",
      description: "Pineapple and coconut blended drink and a touch of sweetness",
      price: 140,
      quantity: 30,
      serves: 30,
    },
    {
      name: "Blue Lagoon",
      image: "https://static.vecteezy.com/system/resources/previews/047/585/492/non_2x/fresh-blue-lagoon-cocktail-isolated-on-transparent-background-png.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "Bright blue mocktail with a citrus twist and a touch of sweetness",
      price: 150,
      quantity: 25,
      serves: 25,
    },
    {
      name: "Fruit Punch",
      image: "https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-fruit-punch-in-a-tall-glass-with-floating-slices-png-image_12511779.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "A mix of fruit juices with a sweet taste and a splash of lemon",
      price: 130,
      quantity: 40,
      serves: 40,
    },
    // Additional Items
    {
      name: "Strawberry Lemonade",
      image: "https://static.vecteezy.com/system/resources/thumbnails/048/409/410/small_2x/fruit-drink-isolated-on-transparent-background-free-png.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "A tangy lemonade infused with strawberries and a touch of sweetness",
      price: 130,
      quantity: 30,
      serves: 30,
    },
    {
      name: "Cucumber Cooler",
      image: "https://img.freepik.com/premium-photo/fresh-cucumber-mint-cooler-isolated-white-background_787273-76449.jpg?w=360",
      rating: "⭐⭐⭐⭐✰",
      description: "A refreshing mocktail with cucumber, lime, and mint",
      price: 110,
      quantity: 25,
      serves: 25,
    },
    {
      name: "Orange Sunset",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnORB1XaOO-tgHb4jdk-KxhjUf3dmLwaSPd4Fzrh3PONB5quS5SIRzWBrfgctuhxuWgdo&usqp=CAU",
      rating: "⭐⭐⭐⭐⭐",
      description: "Orange juice with a hint of grenadine for a sunset effect",
      price: 140,
      quantity: 20,
      serves: 20,
    },
    {
      name: "Minty Watermelon",
      image: "https://i.pinimg.com/736x/55/a8/dd/55a8ddfeffdb235b17ebc9445f2000e0.jpg",
      rating: "⭐⭐⭐⭐⭐",
      description: "Watermelon juice with a cool mint flavor and a splash of lemon",
      price: 120,
      quantity: 40,
      serves: 40,
    },
    {
      name: "Apple Fizz",
      image: "https://cdn.shakedeal.com/images/detailed/958/SDPAS0047400_cjp1-7p.png",
      rating: "⭐⭐⭐⭐✰",
      description: "Apple juice with soda and a dash of cinnamon",
      price: 150,
      quantity: 25,
      serves: 25,
    },
    {
      name: "Tropical Breeze",
      image: "https://www.goodygoody.com/ccstore/v1/images/?source=/file/v2365625267149004147/products/37189.Tropical-Breeze-White-Rum_80O_1L.png&height=475&width=475",
      rating: "⭐⭐⭐⭐⭐",
      description: "A mix of tropical fruits like pineapple, passionfruit, and mango",
      price: 160,
      quantity: 30,
      serves: 30,
    },
  ],
},
];




class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cartItems: [],
      showModal: false,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  addItemToCart = (item) => {
    const { cartItems } = this.state;
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      this.setState({ cartItems: updatedCartItems });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, { ...item, quantity: 1 }],
      }));
    }
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  removeItem = (index) => {
    const newCartItems = this.state.cartItems.filter((_, i) => i !== index);
    this.setState({ cartItems: newCartItems });
  };

  onQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...this.state.cartItems];
    updatedCartItems[index].quantity = newQuantity;
    this.setState({ cartItems: updatedCartItems });
  };
  render() {
    const { searchQuery, cartItems, showModal } = this.state;

    const filteredFoodItems = foodItems.flatMap(category =>
      category.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    return (
      <div className="container">
        <div>
          <h2 className="flex justify-center font-semibold text-4xl py-4">
            Choose What's In Your Mind
          </h2>

          {/* Search Input for Food Items */}
          <input
            type="text"
            placeholder="Search for food items..."
            value={searchQuery}
            onChange={this.handleSearchChange}
            className="form-control mb-4 px-10 container"
          />

          {filteredFoodItems.length > 0 ? (
            <div className="container flex flex-wrap justify-center gap-6">
              {filteredFoodItems.map((item, index) => (
                <div key={index} className="py-2">
                  <Card className="w-auto h-auto max-w-xs rounded-3xl hover:scale-110 transition duration-150 cursor-pointer" style={{ width: '18rem', height: "22rem" }}>
                    <Card.Img variant="top" src={item.image} className="h-36 w-auto p-0" />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.rating}</Card.Text>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant="primary" onClick={() => this.addItemToCart(item)}>Add Item</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p>No food items found.</p>
          )}
        </div>

        {/* Modal for "Item Added to Cart" */}
        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Item added to cart!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Cart cartItems={cartItems} 
        handleRemoveItem={this.handleRemoveItem}
        // onQuantityChange={onQuantityChange}
        // removeItem={removeItem}
        />
      </div>
    );
  }
}



export default Categories;
