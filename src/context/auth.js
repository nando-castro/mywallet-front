import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [saldo, setSaldo] = useState('');
    const [transation, setTransation] = useState('')

    useEffect(() => {
        if (localStorage.getItem('userLogged')) {
            let person = localStorage.getItem('userLogged');
            person = JSON.parse(person);
            setUser(person);
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken, setTransation }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);

/* import { createContext } from "react";

const dadosUser = createContext();

export default dadosUser; */