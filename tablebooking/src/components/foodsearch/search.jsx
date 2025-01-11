import{ useState } from "react";

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



export default FoodItemsSearch;
