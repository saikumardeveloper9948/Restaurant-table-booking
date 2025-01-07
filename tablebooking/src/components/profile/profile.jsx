import  { useState } from "react";

const UserProfile = (emailData) => {
  // User state
  const [user, setUser] = useState({
    name: "",
    email: "",
    dob: "",
    profileImage: "", // Replace with actual image URL
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

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
  const handleLogout = () => {
    alert("You have logged out!");
    
    // Implement logout logic here (e.g., Firebase auth signOut)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        {/* Profile Header */}
        <div className="flex items-center flex-col">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {isEditing ? (
            <div className="mt-4">
              <input
                type="text"
                name="name"
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
            <p className="text-gray-600 font-medium">Email:</p>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={emailData}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800">{user.email}</p>
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
