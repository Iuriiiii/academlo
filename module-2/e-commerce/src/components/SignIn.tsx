import axios from 'axios';
import React, { FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useGlobal } from 'react-simplify';
import { IResponse } from '../models';

interface Props { }

const SignIn = (props: Props) => {
    const navigator = useNavigate();
    const cacheSession = localStorage.getItem('session');
    const [session, setSession] = useGlobal<string | null>('session');

    if (cacheSession !== null) {
        return <Navigate to='/' />;
    }

    function formSubmit(e: FormEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            firstname: HTMLInputElement,
            lastname: HTMLInputElement,
            email: HTMLInputElement,
            password: HTMLInputElement,
        };

        const firstName = target.firstname;
        const lastname = target.lastname;
        const email = target.email;
        const password = target.password;

        if (!(email.validity.valid &&
            password.validity.valid)) {
            return alert('Some of the inputs are invalid');
        }

        // console.log(email.value, password.value);

        axios.post<IResponse>('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', {
            email: email.value,
            password: password.value
        })
            .then(res => {
                const token = res.data.data.token!;
                localStorage.setItem('session', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setSession(token);
                navigator('/');
            })
            .catch(console.error);
    }

    return (
        <div className=''>
            <form className='flex flex-col gap-5 p-5 divide-white shadow-sm shadow-black' onSubmit={formSubmit}>
                <label><input className='bg-slate-200 p-2 focus:bg-white border-b-2 border-black invalid:border-red-500 valid:border-green-500' placeholder='Email' name='email' type='email' required /></label>
                <label><input className='bg-slate-200 p-2 focus:bg-white border-b-2 border-black invalid:border-red-500 valid:border-green-500' placeholder='Password' name='password' type='password' pattern='[a-zA-ZñáéíóúÁÉÍÓÚÑ\d]+' required /></label>
                <button type='submit' className='bg-red-500 text-white font-bold shadow-sm shadow-black'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn