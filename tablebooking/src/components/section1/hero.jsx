import Carousel from "react-bootstrap/Carousel";
// import Button from 'react-bootstrap/Button';
import sandwich from '../../assets/sandwich.png';
import pizza from '../../assets/pizza.png';
import hero2 from '../../assets/hero2.png';
import image1 from "../../assets/1.png";
import {useNavigate} from 'react-router-dom';



// const foodItems = [
//   {
//     category: "Vegetarian",
//     items: [
//       {
//         name: "Paneer Butter Masala",
//         price: 250,
//         description: "Cottage cheese in a creamy tomato gravy",
//         image: "https://via.placeholder.com/150?text=Paneer+Butter+Masala",
//         rating: 4.5,
//         quantity: 20,
//         serves: 40, // Serves 2 people per unit
//       },
//       {
//         name: "Aloo Gobi",
//         price: 180,
//         description: "Potato and cauliflower stir-fried with spices",
//         image: "https://via.placeholder.com/150?text=Aloo+Gobi",
//         rating: 4.2,
//         quantity: 25,
//         serves: 50, // Serves 2 people per unit
//       },
//       {
//         name: "Vegetable Biryani",
//         price: 220,
//         description: "Aromatic rice cooked with vegetables and spices",
//         image: "https://via.placeholder.com/150?text=Vegetable+Biryani",
//         rating: 4.7,
//         quantity: 30,
//         serves: 90, // Serves 3 people per unit
//       },
//       {
//         name: "Palak Paneer",
//         price: 240,
//         description: "Cottage cheese in a creamy spinach curry",
//         image: "https://via.placeholder.com/150?text=Palak+Paneer",
//         rating: 4.3,
//         quantity: 15,
//         serves: 30, // Serves 2 people per unit
//       },
//       {
//         name: "Dal Tadka",
//         price: 160,
//         description: "Yellow lentils tempered with spices",
//         image: "https://via.placeholder.com/150?text=Dal+Tadka",
//         rating: 4.1,
//         quantity: 40,
//         serves: 80, // Serves 2 people per unit
//       },
//     ],
//   },
//   {
//     category: "Non-Vegetarian",
//     items: [
//       {
//         name: "Butter Chicken",
//         price: 300,
//         description: "Chicken cooked in a rich creamy gravy",
//         image: "https://via.placeholder.com/150?text=Butter+Chicken",
//         rating: 4.8,
//         quantity: 25,
//         serves: 50, // Serves 2 people per unit
//       },
//       {
//         name: "Mutton Rogan Josh",
//         price: 350,
//         description: "Slow-cooked lamb curry with spices",
//         image: "https://via.placeholder.com/150?text=Mutton+Rogan+Josh",
//         rating: 4.6,
//         quantity: 10,
//         serves: 20, // Serves 2 people per unit
//       },
//       {
//         name: "Chicken Biryani",
//         price: 280,
//         description: "Fragrant rice cooked with chicken and spices",
//         image: "https://via.placeholder.com/150?text=Chicken+Biryani",
//         rating: 4.7,
//         quantity: 35,
//         serves: 105, // Serves 3 people per unit
//       },
//       {
//         name: "Fish Curry",
//         price: 320,
//         description: "Fish cooked in a tangy and spicy curry",
//         image: "https://via.placeholder.com/150?text=Fish+Curry",
//         rating: 4.4,
//         quantity: 20,
//         serves: 40, // Serves 2 people per unit
//       },
//       {
//         name: "Egg Curry",
//         price: 180,
//         description: "Boiled eggs in a flavorful curry",
//         image: "https://via.placeholder.com/150?text=Egg+Curry",
//         rating: 4.2,
//         quantity: 50,
//         serves: 100, // Serves 2 people per unit
//       },
//     ],
//   },
//   {
//     category: "Noodles",
//     items: [
//       {
//         name: "Hakka Noodles",
//         price: 200,
//         description: "Stir-fried noodles with vegetables",
//         image: "https://via.placeholder.com/150?text=Hakka+Noodles",
//         rating: 4.5,
//         quantity: 30,
//         serves: 90, // Serves 3 people per unit
//       },
//       {
//         name: "Chicken Noodles",
//         price: 250,
//         description: "Stir-fried noodles with chicken and spices",
//         image: "https://via.placeholder.com/150?text=Chicken+Noodles",
//         rating: 4.6,
//         quantity: 25,
//         serves: 75, // Serves 3 people per unit
//       },
//       {
//         name: "Egg Noodles",
//         price: 230,
//         description: "Noodles stir-fried with eggs and veggies",
//         image: "https://via.placeholder.com/150?text=Egg+Noodles",
//         rating: 4.4,
//         quantity: 20,
//         serves: 60, // Serves 3 people per unit
//       },
//       {
//         name: "Chili Garlic Noodles",
//         price: 220,
//         description: "Spicy noodles with a chili garlic sauce",
//         image: "https://via.placeholder.com/150?text=Chili+Garlic+Noodles",
//         rating: 4.3,
//         quantity: 30,
//         serves: 90, // Serves 3 people per unit
//       },
//       {
//         name: "Schezwan Noodles",
//         price: 240,
//         description: "Noodles tossed in a spicy Schezwan sauce",
//         image: "https://via.placeholder.com/150?text=Schezwan+Noodles",
//         rating: 4.5,
//         quantity: 35,
//         serves: 105, // Serves 3 people per unit
//       },
//     ],
//   },
//   {
//     category: "Desserts",
//     items: [
//       {
//         name: "Gulab Jamun",
//         price: 120,
//         description: "Sweet dumplings soaked in sugar syrup",
//         image: "https://via.placeholder.com/150?text=Gulab+Jamun",
//         rating: 4.9,
//         quantity: 50,
//         serves: 100, // Serves 2 people per unit
//       },
//       {
//         name: "Ice Cream Sundae",
//         price: 150,
//         description: "Ice cream topped with nuts and chocolate syrup",
//         image: "https://via.placeholder.com/150?text=Ice+Cream+Sundae",
//         rating: 4.7,
//         quantity: 40,
//         serves: 40, // Serves 1 person per unit
//       },
//       {
//         name: "Brownie with Ice Cream",
//         price: 180,
//         description: "Warm brownie served with vanilla ice cream",
//         image: "https://via.placeholder.com/150?text=Brownie+with+Ice+Cream",
//         rating: 4.8,
//         quantity: 20,
//         serves: 20, // Serves 1 person per unit
//       },
//       {
//         name: "Rasmalai",
//         price: 140,
//         description: "Soft cheese discs in flavored milk",
//         image: "https://via.placeholder.com/150?text=Rasmalai",
//         rating: 4.6,
//         quantity: 25,
//         serves: 50, // Serves 2 people per unit
//       },
//       {
//         name: "Cheesecake",
//         price: 200,
//         description: "Creamy cheesecake with a biscuit base",
//         image: "https://via.placeholder.com/150?text=Cheesecake",
//         rating: 4.9,
//         quantity: 15,
//         serves: 15, // Serves 1 person per unit
//       },
//     ],
//   },
//   {
//     category: "Mocktails",
//     items: [
//       {
//         name: "Virgin Mojito",
//         price: 120,
//         description: "Refreshing lime and mint mocktail",
//         image: "https://via.placeholder.com/150?text=Virgin+Mojito",
//         rating: 4.4,
//         quantity: 35,
//         serves: 35, // Serves 1 person per unit
//       },
//       {
//         name: "Pina Colada",
//         price: 140,
//         description: "Pineapple and coconut blended drink",
//         image: "https://via.placeholder.com/150?text=Pina+Colada",
//         rating: 4.5,
//         quantity: 30,
//         serves: 30, // Serves 1 person per unit
//       },
//       {
//         name: "Blue Lagoon",
//         price: 150,
//         description: "Fizzy blue curacao mocktail",
//         image: "https://via.placeholder.com/150?text=Blue+Lagoon",
//         rating: 4.6,
//         quantity: 25,
//         serves: 25, // Serves 1 person per unit
//       },
//       {
//         name: "Fruit Punch",
//         price: 130,
//         description: "A mix of tropical fruit juices",
//         image: "https://via.placeholder.com/150?text=Fruit+Punch",
//         rating: 4.3,
//         quantity: 40,
//         serves: 40, // Serves 1 person
//       }
//     ]
//   }
// ]


const Hero = () => {
  const navigate= useNavigate()
  const handleNavigation= () => {
    navigate("/signup")
  }
  const fooditems=()=>{
    navigate("/categories")
  }
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */}
        <div className="flex flex-col justify-center gap-7 text-center md:text-left pt-24 md:p-0 pb-10 ">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Delicious Food Is Waiting For You
          </h1>
            <p className="font-semibold text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum beatae exercitationem soluta suscipit neque dolor, expedita earum dolore similique!
            </p>
            <div className="flex gap-4 items-center md:justify-center justify-center ">
              <button onClick={fooditems} className="primary-btn hover:scale-110 duration-200">Food Menu</button>
              <button onClick={handleNavigation}  className="secondary-btn text-black hover:scale-110  duration-200">Book Table </button>
            </div>
      

        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
    

          <Carousel className="flex flex-col justify-center mx-auto ">
            <Carousel.Item>
              <img src={sandwich} alt="First slide" />
           
            </Carousel.Item>
            <Carousel.Item>
              <img src={pizza} alt="Second slide" />
           
            </Carousel.Item>
            <Carousel.Item>
              <img src={hero2} alt="Third slide" />
            
            </Carousel.Item>
            <Carousel.Item>
              <img src={image1} alt="Third slide" />
             
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
