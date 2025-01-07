import { useState } from "react";
import firebase from "../firebase/firebaseconfig/firbase_config";
import "firebase/compat/auth";
import UserProfile from "../profile/profile";

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isForgotPassword, setIsForgotPassword] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [otp, setOtp] = useState("");
  // const [verificationId, setVerificationId] = useState("");
  // const [isOtpSent, setIsOtpSent] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handlePhoneChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const handleOtpChange = (e) => {
  //   setOtp(e.target.value);
  // };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().sendPasswordResetEmail(formData.email);
      alert("Password reset email sent! Check your inbox.");
      setIsForgotPassword(false);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(error.message);
    }
  };

  // const handleOtpSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const credential = firebase.auth.PhoneAuthProvider.credential(
  //       verificationId,
  //       otp
  //     );
  //     await firebase.auth().signInWithCredential(credential);
  //     alert("Phone number verified and logged in!");
  //   } catch (error) {
  //     console.error("Error verifying OTP:", error);
  //     alert("Invalid OTP. Please try again.");
  //   }
  // };

  // const handleOtpRequest = async (e) => {
  //   e.preventDefault();
  //   const appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
  //     size: "invisible",
  //   });

  //   try {
  //     const verificationId = await firebase
  //       .auth()
  //       .signInWithPhoneNumber(phoneNumber, appVerifier);
  //     setVerificationId(verificationId);
  //     setIsOtpSent(true);
  //     alert("OTP sent to your phone number!");
  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic using Firebase Authentication
      try {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(formData.email, formData.password);

        const user = userCredential.user;
        if (user.emailVerified) {
          alert("Login successful!");
        } else {
          alert("Please verify your email before logging in.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Invalid email or password.");
      }
    } else {
      // Signup logic with email verification
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(formData.email, formData.password);

        const user = userCredential.user;
        await user.sendEmailVerification();
        alert(
          "Signup successful! A verification email has been sent to your email address. Please verify before logging in."
        );
        setFormData({ email: "", password: "", confirmPassword: "" });
      } catch (error) {
        console.error("Error signing up:", error);
        alert(error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md rounded-lg shadow-md p-6 bg-gray-100 ">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          {isForgotPassword
            ? "Forgot Password"
            : isLogin
            ? "Login"
            : "Signup"}
        </h2>
        {isForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-4">
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
            {isLogin?<UserProfile emailData={formData.email}/>:""} 
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
            >
              Send Password Reset Email
            </button>
          </form>
        ) : (
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
              className="w-full py-2 px-4 bg-orange-400 text-white rounded-md shadow hover:bg-orange-500"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        )}
        <p className="text-sm text-center mt-4 text-gray-600">
          {isForgotPassword ? (
            <button
              onClick={() => setIsForgotPassword(false)}
              className="text-orange-500 hover:underline font-medium"
            >
              Back to Login
            </button>
          ) : isLogin ? (
            <span>
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-orange-500 hover:underline font-medium"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-orange-500 hover:underline font-medium"
              >
                Log in
              </button>
            </span>
          )}
        </p>
        {!isForgotPassword && (
          <p className="text-sm text-center mt-2 text-gray-600">
            Forgot your password?{" "}
            <button
              onClick={() => setIsForgotPassword(true)}
              className="text-orange-500 hover:underline font-medium"
            >
              Reset Password
            </button>
          </p>
        )}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default Loginsignup;
