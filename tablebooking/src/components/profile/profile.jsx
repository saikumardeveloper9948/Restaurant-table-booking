import  { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import firebase from "../firebase/firebaseconfig/firbase_config"; 

const UserProfile = () => {
    // Get the email from location state (passed from Loginsignup)
    const location = useLocation();
    const navigate = useNavigate();
    const  email = location.state?.email || ""; // Use email passed from navigation state
  
  // User state
  const [user, setUser] = useState({
    name: "",
    email:email || "",
    dob: "",
    profileImage: "", // Replace with actual image URL
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  useEffect(() => {
    // If email is passed, update user state with email
    if (email) {
      setUser((prevUser) => ({
        ...prevUser,
        email, // Update email if passed in
      }));
    }
  }, [email]); // Update user if the email changes


  // Handle input changes in edit mode
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Save changes
  const handleSave = () => {
    setUser({ ...editData });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  // Cancel editing
  const handleCancel = () => {
    setEditData({ ...user });
    setIsEditing(false);
  };

  // Logout functionality
  const handleLogout =async () => {
    try {
      await firebase.auth().signOut();
      alert("You have logged out!");
      navigate("/signup");
    } catch (error){
      console.error("error occured at logout :",error);
      alert("An error occurred during logout.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        {/* Profile Header */}
        <div className="flex items-center flex-col">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-500">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {isEditing ? (
            <div className="  flex">
               <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                value={editData.name}
                onChange={handleChange}
                className="text-center text-xl font-semibold text-gray-700 border rounded-md px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ) : (
            <h1 className="text-2xl font-bold text-gray-800 mt-4">{user.name}</h1>
          )}
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between">
            {/* <p className="text-gray-600 font-medium">Email:</p> */}
            <label htmlFor="email"> Email</label>
            {isEditing ? (
              <input
                type="email"
                id="email"
                name="email"
                value={editData.email}
                // readOnly 
                onChange={handleChange}
                className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
            ) : (
              <p className="text-gray-800">{user.email}</p>   // Display email in non-editing mode
            )}
           

          </div>

          {/* Date of Birth */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">Date of Birth:</p>
            {isEditing ? (
              <input
                type="date"
                name="dob"
                value={editData.dob}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800">{user.dob}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-2">
          {isEditing ? (
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow hover:bg-green-600 mr-2"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="w-full py-2 px-4 bg-gray-400 text-white rounded-md shadow hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
