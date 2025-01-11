import { useNavigate } from "react-router-dom";
import { message } from "antd";
import firebase from "../firebase/firebaseconfig/firbase_config";
import { auth } from "../firebase/firebaseconfig/firbase_config";

const UserProfile = () => {
  const navigate = useNavigate();
  
  // Logout functionality
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      message.success("You have logged out!");
      navigate("/signup"); // Redirect to signup/login page after logout
    } catch (error) {
      console.error("Error during logout:", error);
      message.error("An error occurred during logout.");
    }
  };
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          User Profile
        </h1>

        {/* Display email */}
        <div className="mb-4">
          {user ? (
            <p className="text-orange-500 text-center text-sm">
              Email: {user.email}
            </p>
          ) : (
            <p className="text-red-600 text-center"> No user logged in*</p>
          )}
        </div>

        {/* Logout button */}
        {user && (
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
