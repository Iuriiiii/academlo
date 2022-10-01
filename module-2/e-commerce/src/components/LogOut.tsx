import axios from 'axios';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useGlobal } from 'react-simplify';

interface Props { }

const LogOut = (props: Props) => {
    const navigator = useNavigate();
    // const session = localStorage.getItem('session');
    const [session, setSession] = useGlobal<string | null>('session');

    axios.defaults.headers.common['Authorization'] = '';
    localStorage.removeItem('session');
    setSession(null);

    return (
        <Navigate to='/' />
    );
}

export default LogOut