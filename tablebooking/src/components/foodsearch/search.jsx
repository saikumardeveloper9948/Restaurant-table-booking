import React, { useState } from "react";

const FoodItemsSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input
  const [filteredCategories, setFilteredCategories] = useState(foodItems); // Filtered categories

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter categories and their items
    const filtered = foodItems.filter((category) =>
      category.category.toLowerCase().includes(term)
    );

    setFilteredCategories(filtered);
  };

  return (
    <div>
      <h1>Food Categories</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a category..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ margin: "10px 0", padding: "8px", width: "300px" }}
      />

      {/* Render Filtered Results */}
      <div>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.category} style={{ marginBottom: "20px" }}>
              <h2>{category.category}</h2>
              <ul>
                {category.items.map((item) => (
                  <li key={item.name}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

// Sample Data
const foodItems = [
  {
    category: "Vegetarian",
    items: [
      { name: "Paneer Butter Masala", price: 250 },
      { name: "Aloo Gobi", price: 180 },
    ],
  },
  {
    category: "Non-Vegetarian",
    items: [
      { name: "Butter Chicken", price: 300 },
      { name: "Mutton Rogan Josh", price: 350 },
    ],
  },
  {
    category: "Noodles",
    items: [
      { name: "Hakka Noodles", price: 200 },
      { name: "Chicken Noodles", price: 250 },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Gulab Jamun", price: 120 },
      { name: "Brownie with Ice Cream", price: 180 },
    ],
  },
  {
    category: "Mocktails",
    items: [
      { name: "Virgin Mojito", price: 120 },
      { name: "Blue Lagoon", price: 150 },
    ],
  },
];

export default FoodItemsSearch;
