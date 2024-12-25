import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const foodItems = [
  {
    category: "Vegetarian",
    items: [
      {
        name: "Paneer Butter Masala",
        price: 250,
        description: "Cottage cheese in a creamy tomato gravy",
        image: "https://img.freepik.com/premium-photo/paneer-butter-masala-white-plate-white-background_864588-11304.jpg",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 20,
        serves: 40, // Serves 2 people per unit
      },
      {
        name: "Aloo Gobi",
        price: 180,
        description: "Potato and cauliflower stir-fried with spices",
        image: "https://static.vecteezy.com/system/resources/thumbnails/036/289/645/small_2x/ai-generated-aloo-gobi-with-transparent-background-ai-png.png",
        rating: "⭐⭐⭐⭐✰",
        quantity: 25,
        serves: 50, // Serves 2 people per unit
      },
      {
        name: "Vegetable Biryani",
        price: 220,
        description: "Aromatic rice cooked with vegetables and spices",
        image: "https://wallpapers.com/images/high/colorful-vegetable-biryani-dish-7iy413ch73lgcd67-2.png",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 30,
        serves: 90, // Serves 3 people per unit
      },
      {
        name: "Palak Paneer",
        price: 240,
        description: "Cottage cheese in a creamy spinach curry",
        image: "https://img.freepik.com/premium-photo/palak-paneer-image-white-background_762785-259801.jpg",
        rating: "⭐⭐⭐⭐✰",
        quantity: 15,
        serves: 30, // Serves 2 people per unit
      },
      {
        name: "Dal Tadka",
        price: 160,
        description: "Yellow lentils tempered with spices",
        image: "https://png.pngtree.com/png-vector/20240818/ourmid/pngtree-whole-yellow-lentil-dal-tadka-or-fry-with-jeera-png-image_13528759.png",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 40,
        serves: 80, // Serves 2 people per unit
      },
    ],
  },
  {
    category: "Non-Vegetarian",
    items: [
      {
        name: "Butter Chicken",
        price: 300,
        description: "Chicken cooked in a rich creamy gravy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYDxfn9UgUUtMvjcvZmS9iKOcnUa5ZYYdFA&s",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 25,
        serves: 50, // Serves 2 people per unit
      },
      {
        name: "Mutton Rogan Josh",
        price: 350,
        description: "Slow-cooked lamb curry with spices",
        image: "https://cdn.create.vista.com/api/media/small/629454412/stock-photo-indian-style-mutton-gosht-masala-indian-lamb-meat-rogan-josh",
        rating: "⭐⭐⭐⭐✰",
        quantity: 10,
        serves: 20, // Serves 2 people per unit
      },
      {
        name: "Chicken Biryani",
        price: 280,
        description: "Fragrant rice cooked with chicken and spices",
        image: "https://i.pinimg.com/474x/67/e7/ff/67e7ff9859d6c9df0c30b897bf901e1d.jpg",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 35,
        serves: 105, // Serves 3 people per unit
      },
      {
        name: "Fish Curry",
        price: 320,
        description: "Fish cooked in a tangy and spicy curry",
        image: "https://www.priyom.in/wp-content/uploads/2022/05/recipe-3-480x270.png",
        rating: "⭐⭐⭐⭐✰",
        quantity: 20,
        serves: 40, // Serves 2 people per unit
      },
      {
        name: "Egg Curry",
        price: 180,
        description: "Boiled eggs in a flavorful curry",
        image: "https://img.freepik.com/premium-photo/top-view-egg-curry-white-background_601128-2167.jpg",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 50,
        serves: 100, // Serves 2 people per unit
      },
    ],
  },
  {
    category: "Noodles",
    items: [
      {
        name: "Hakka Noodles",
        price: 200,
        description: "Stir-fried noodles with vegetables",
        image: "https://thumbs.dreamstime.com/b/chilli-garlic-hakka-noodles-black-bowl-isolated-white-background-indo-chinese-vegetarian-cuisine-dish-indian-veg-187539807.jpg",
        rating: "⭐⭐⭐⭐✰",
        quantity: 30,
        serves: 90, // Serves 3 people per unit
      },
      {
        name: "Chicken Noodles",
        price: 250,
        description: "Stir-fried noodles with chicken and spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSV03E8fhtYGPtR-VCf3AY035Ox9JBXvUdvQ&s",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 25,
        serves: 75, // Serves 3 people per unit
      },
      {
        name: "Egg Noodles",
        price: 230,
        description: "Noodles stir-fried with eggs and veggies",
        image: "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-stir-fried-noodles-isolated-png-image_11468959.png",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 20,
        serves: 60, // Serves 3 people per unit
      },
      {
        name: "Chili Garlic Noodles",
        price: 220,
        description: "Spicy noodles with a chili garlic sauce",
        image: "https://myblacktree.com/cdn/shop/files/plain-chow-mein-02-removebg-preview.png?v=1691150653",
        rating: "⭐⭐⭐⭐✰",
        quantity: 30,
        serves: 90, // Serves 3 people per unit
      },
      {
        name: "Schezwan Noodles",
        price: 240,
        description: "Noodles tossed in a spicy Schezwan sauce",
        image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-schezwan-noodles-or-szechuan-vegetable-png-image_11919080.png",
        rating: "⭐⭐⭐⭐✰",
        quantity: 35,
        serves: 105, // Serves 3 people per unit
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Gulab Jamun",
        price: 120,
        description: "Sweet dumplings soaked in sugar syrup",
        image: "https://static.vecteezy.com/system/resources/thumbnails/049/500/928/small_2x/gulab-jamun-in-a-plate-isolated-on-transparent-background-free-png.png",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 50,
        serves: 100, // Serves 2 people per unit
      },
      {
        name: "Ice Cream Sundae",
        price: 150,
        description: "Ice cream topped with nuts and chocolate syrup",
        image: "data:image/jpeg;base64,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",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 40,
        serves: 40, // Serves 1 person per unit
      },
      {
        name: "Brownie with Ice Cream",
        price: 180,
        description: "Warm brownie served with vanilla ice cream",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEeWtM5ujtlVD5jmcAg0jt3NazgQPPCqRBw&s",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 20,
        serves: 20, // Serves 1 person per unit
      },
      {
        name: "Rasmalai",
        price: 140,
        description: "Soft cheese discs in flavored milk",
        image: "data:image/jpeg;base64,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",
        rating: "⭐⭐⭐⭐✰",
        quantity: 25,
        serves: 50, // Serves 2 people per unit
      },
      {
        name: "Cheesecake",
        price: 200,
        description: "Creamy cheesecake with a biscuit base",
        image: "https://png.pngtree.com/png-vector/20241102/ourmid/pngtree-slice-of-strawberry-cheesecake-topped-with-fresh-berries-png-image_14223080.png",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 15,
        serves: 15, // Serves 1 person per unit
      },
    ],
  },
  {
    category: "Mocktails",
    items: [
      {
        name: "Virgin Mojito",
        price: 120,
        description: "Refreshing lime and mint mocktail",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-1c5QRXfn8z6Sdlc94LkSacO_tRgk7e0zw&s",
        rating: "⭐⭐⭐⭐✰",
        quantity: 35,
        serves: 35, // Serves 1 person per unit
      },
      {
        name: "Pina Colada",
        price: 140,
        description: "Pineapple and coconut blended drink",
        image: "https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-pina-colada-with-pineapple-slice-and-cherry-png-image_12511808.png",
        rating: "⭐⭐⭐⭐✰",
        quantity: 30,
        serves: 30, // Serves 1 person per unit
      },
      {
        name: "Blue Lagoon",
        price: 150,
        description: "Fizzy blue curacao mocktail",
        image: "https://static.vecteezy.com/system/resources/previews/047/585/492/non_2x/fresh-blue-lagoon-cocktail-isolated-on-transparent-background-png.png",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 25,
        serves: 25, // Serves 1 person per unit
      },
      {
        name: "Fruit Punch",
        price: 130,
        description: "A mix of tropical fruit juices",
        image: "https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-fruit-punch-in-a-tall-glass-with-floating-slices-png-image_12511779.png",
        rating: "⭐⭐⭐⭐⭐",
        quantity: 40,
        serves: 40, // Serves 1 person
      },
    ],
  },
];

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="flex justify-center font-semibold  text-4xl py-4">
            Choose What's In Your Mind
          </h2>
          {foodItems.map((items, index)=>{
            return(
                // console.log(items.items)
               < div key={index} className="container flex flex-wrap justify-center gap-6">
                 {items.items.map((a,b)=>{
                    return(
                       <>
                         
                        <div key ={b} className=" py-2 ">
                        <Card  style={{ width: '18rem', height:"22rem" }} >
                        <Card.Img variant="top" src={a.image} className="h-36" />
                        <Card.Body>
                          <Card.Title>{a.name}</Card.Title>
                          <Card.Text>{a.rating}</Card.Text>
                          <Card.Text>{a.description}</Card.Text>

                          <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                       </Card>
                       
                       </div>
                        
                       </>
                    )
                })}
               </div>


    //          
            )         
          })}
        </div>
      </div>
    );
  }
}

export default Categories;
