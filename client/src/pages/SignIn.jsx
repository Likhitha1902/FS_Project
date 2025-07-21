import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [form, setForm] = useState();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();


  let getuserdata = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleLogin = () => {
    navigate("/Login");
  };


  let handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("step1")
    let response = await fetch("http://localhost:3000/signup",
       {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json",
        },
      }
    )

    let result = await response.json()
   alert(result.message)
    console.log(form);
    let get = await dispatch(createUser(form));
    console.log(get);
    if (get.payload.token) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify(get.payload.userRegistered)
      );
      await localStorage.setItem(
        "userToken",
        JSON.stringify(get.payload.token)
      );
    }

  };




  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover"
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231230/pngtree-watercolor-abstraction-of-greenery-background-image_13908220.png')",
      }}
    >
      <div className="bg-opacity-70 bg-black p-10 rounded-xl shadow-xl w-full max-w-md my-20 text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to</h1>
        <h1 className="text-4xl font-extrabold text-white mb-5">🌿Terra & Twine🌿</h1>

        <form
          autoComplete="on"
          onSubmit={handleSubmit()}
        >

          <div>
            <label className="block text-white text-left mb-2">Name:</label>
            <input
              type="text"
              name="name"
              onChange={getuserdata}
              className="w-full p-3 mb-4 text-black rounded-md"
              required
            />
          </div>


          <div>
            <label className="block text-white text-left mb-2">Email:</label>
            <input
              type="email"
              name="email"
              onChange={getuserdata}
              className="w-full p-3 mb-4 text-black rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-white text-left mb-2">Password:</label>
            <input
              type="password"
              name="password"
              onChange={getuserdata}
              className="w-full p-3 mb-4 text-black rounded-md"
              required
            />

          </div>


          <>

            <div>
              <label className="block text-white text-left mb-2">Address:</label>
              <input
                type="text"
                name="address"
                onChange={getuserdata}
                className="w-full p-3 mb-6 text-black rounded-md"
                required
              />
            </div>

          </>


          <input
            className="py-1 outline-none px-7 rounded-2xl bg-blue-500 text-white"
            disabled={isSubmitting}
            type="submit"
            onClick={handleFormSubmit}
            value="Register"
          />

          <p className="text-white mt-10">Already Register ? <a onClick={handleLogin} className="text-blue-500">Login</a></p>
        </form>

      </div>
    </div>
  );
};

export default SignIn;