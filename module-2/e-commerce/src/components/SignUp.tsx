import axios from 'axios';
import React, { FormEvent } from 'react'

interface Props { }

// {
//     "firstName": "Max",
//     "lastName": "Rangel",
//     "email": "max@gmail.com",
//     "password": "pass1234",
//     "phone": "1234567891",
//     "role": "admin"
// }

function formSubmit(e: FormEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        email: HTMLInputElement,
        password: HTMLInputElement,
    };

    const email = target.email;
    const password = target.password;

    if (!(
        email.validity.valid &&
        password.validity.valid)) {
        return alert('Some of the inputs are invalid');
    }

    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', {
        email: email.value,
        password: password.value
    })
        .then()
        .catch(console.error);
}

const SignUp = (props: Props) => {
    return (
        <div className=''>
            <form className='flex flex-col gap-5 p-5 divide-white shadow-sm shadow-black' onSubmit={formSubmit}>
                <label><input className='bg-slate-200 p-2 focus:bg-white border-b-2 border-black invalid:border-red-500 valid:border-green-500' placeholder='First Name' name='firstname' type='text' pattern='[a-zA-ZñáéíóúÁÉÍÓÚÑ]+' required /></label>
                <label><input className='bg-slate-200 p-2 focus:bg-white border-b-2 border-black invalid:border-red-500 valid:border-green-500' placeholder='Last Name' name='lastname' type='text' pattern='[a-zA-ZñáéíóúÁÉÍÓÚÑ]+' required /></label>
                <label><input className='bg-slate-200 p-2 focus:bg-white border-b-2 border-black invalid:border-red-500 valid:border-green-500' placeholder='Email' name='email' type='email' required /></label>
                <label><input className='bg-slate-200 p-2 focus:bg-white border-b-2 border-black invalid:border-red-500 valid:border-green-500' placeholder='Password' name='password' type='password' pattern='[a-zA-ZñáéíóúÁÉÍÓÚÑ\d]+' required /></label>
                <button type='submit' className='bg-red-500 text-white font-bold shadow-sm shadow-black'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp