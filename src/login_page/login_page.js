import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './login_page.css';

const LoginPage = () => {
    const { register, handleSubmit, errors } = useForm();
    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data, event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setUserInfo(data);
        console.log(data);
    }

    const ErrorMessage = ({ message }) => <p>{message}</p>;

    return (
        <div className="container">
            <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign Up</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    {errors && (
                        <>
                            <ErrorMessage message={errors?.username?.message} />
                            <div className="field">
                                <label>Username</label>
                                <input type="text" name="username" placeholder="Username" ref={register({ required: "Username is required" })} />
                            </div>
                            <ErrorMessage message={errors?.email?.message} />
                            <div className="field">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Email" ref={register({ 
                                    required: "Email is required", 
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Correct email regex
                                        message: "Please enter a valid email address"
                                    }
                                })} />
                            </div>
                            <ErrorMessage message={errors?.password?.message} />
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password" ref={register({ 
                                    required: "Password is required", 
                                    minLength: { value: 4, message: "Password must be at least 4 characters long" }, 
                                    maxLength: { value: 10, message: "Password cannot exceed 10 characters" } 
                                })} />
                            </div>
                        </>
                    )}
                    <button type="submit" className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
