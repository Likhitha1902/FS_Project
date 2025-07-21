import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        formState: { errors, isSubmitting },
    } = useForm();

    const [form, setForm] = useState();

    let getUserData = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form, 'login');
        let response = await fetch("http://localhost:3000/login",
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

    };

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-cover"
                style={{
                    backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231230/pngtree-watercolor-abstraction-of-greenery-background-image_13908220.png')",
                }}>
                <div className="bg-opacity-70 bg-black p-10 rounded-xl shadow-xl w-full max-w-md my-20 text-center">
                    <p className="md:text-base lg:text-2xl font-bold text-white ">
                        Login your account
                    </p>

                    <div>


                        <form
                            className=" flex flex-col  space-y-3  h-full my-5"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="block text-white text-left mb-2">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={getUserData}
                                    className="w-full  p-3 mb-4 text-black rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white text-left mb-2">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={getUserData}
                                    className="w-full p-3 mb-4 text-black rounded-md"
                                    required
                                />

                            </div>

                            <input
                                className="py-1 px-7 rounded-2xl bg-blue-500 text-white"
                                type="submit"
                                value="Submit"
                                disabled={isSubmitting}
                            />
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;