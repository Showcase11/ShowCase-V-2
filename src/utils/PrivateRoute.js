import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate=useNavigate()
    const [loading, setLoading] = useState(true)
    const [userToken, setUserToken] = useState()
    let token = localStorage.getItem("token");
    token && token.replace(/['"]+/g, "");

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/user/validation', {
                    headers: {
                        'Authorization': cookies?.token,
                    }
                })
                console.log('from private Route', data)
                console.log('from private Route', data?.data?.role)
                
                if (data?.message === "Success" && data?.data?.role === 0) {
                    setLoading(false)
                    setUserToken(data)
                }
                setLoading(false)
            } catch (error) {
                console.log('private route',error)
                if (error?.response.status === 400) {
                    removeCookie('token'/* , {
                        path: '/',
                        maxAge: 7 * 24 * 60 * 60 * 1000,// 7d,
                    } */)
                    signOut(auth)
                    navigate('/auth')
                }

            }
        })()
    }, [token, cookies, removeCookie,navigate])
    if (loading) return <div className='text-center my-40'>Loading...</div>

    return userToken ? children : <Navigate to={'/auth'} />

};

export default PrivateRoute;

