import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-300 via-green-700 to-green-300 p-8">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-6">Your Profile</h1>
        <img src="https://i.pinimg.com/1200x/55/2c/c0/552cc033eca6ec4b289a96777e078954.jpg"class="w-20 h-20 rounded-full object-cover mx-auto border-2 border-black-500"/>
        <div className="text-left">
          <h1 className="text-lg text-black mb-1 mt-5">Name:</h1>
          <h1 className="text-lg text-black mb-1">Email:</h1>
          <h1 className="text-lg text-black mb-6">Address:</h1>
        </div>
        <button
          onClick={logout}
          className="bg-red-600 text-white py-3 px-6 rounded-md text-xl hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
