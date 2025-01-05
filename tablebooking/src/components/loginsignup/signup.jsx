import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const navigate = useNavigate(); 
  //  const handleClick = (path) => {
    // setIsMenuVisible(false); // Close the menu
    // navigate(path); // Navigate to the selected path
  // };



  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      try {
        const response = await axios.get(
          "https://signup-login-data-a4f69-default-rtdb.firebaseio.com/signup.json"
        );

        const users = response.data;
        const user = Object.values(users || {}).find(
          (u) => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          alert("Login successful!");
          console.log("User logged in:", user);
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Something went wrong. Please try again.");
      }
    } else {
      // Signup logic
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        // Fetch existing users to check for duplicate emails
        const response = await axios.get(
          "https://signup-login-data-a4f69-default-rtdb.firebaseio.com/signup.json"
        );

        const users = response.data;
        const emailExists = Object.values(users || {}).some(
          (user) => user.email === formData.email
        );

        if (emailExists) {
          alert("Email already exists! Please use a different email.");
          return;
        }
        

        // Add new user to the database
        await axios.post(
          "https://signup-login-data-a4f69-default-rtdb.firebaseio.com/signup.json",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        alert("Signup successful!");
        setFormData({ email: "", password: "", confirmPassword: "" });
      } catch (error) {
        console.error("Error signing up:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md rounded-lg shadow-md p-6 bg-gray-100 ">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          {isLogin ? "Login" : "Signup"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-400 text-white rounded-md shadow hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-orange-500 hover:underline font-medium"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Loginsignup;
