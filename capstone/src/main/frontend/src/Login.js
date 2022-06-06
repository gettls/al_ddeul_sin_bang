import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { cookieClient, useCookies } from 'react-cookie';

export default function Login() {
    
    const {register, handleSubmit, formState} = useForm();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['name']);

    return (
        <form onSubmit={handleSubmit((data, event) => {
                event.preventDefault();
                let str = `email=${data.email}&password=${data.password}`;
                let cookie = cookieClient.load('login-cookie');

                if(cookie === undefined) {
                    fetch('http://localhost:8080/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Accept: '*/*',
                        },
                        body: str
                    })
                    .then(response => {
                        cookieClient.save('login-cookie', response.data, {path:'/'})
                        navigate('/');
                    })
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
                }
            })}
        >
            <legend>Login</legend>
            <div>
                <input 
                    {
                        ...register("email", {
                            value: "",
                            required: true,
                        })
                    } 
                    type="text"
                    placeholder='Username '
                />
            </div>
            <div>
                <input 
                    {
                        ...register("password", {
                            value: "",
                            required: true,
                        })
                    } 
                    type="password"
                    placeholder='Password '
                />
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}