import { useState } from 'react';

export default function useStorage() {
    const getUsername = () => {
        const string = sessionStorage.getItem('login');
        const user = JSON.parse(string)
        return string ? user.username : '';
    };

    const [username, setUsername] = useState(getUsername());

    const getRole = () => {
        const string = sessionStorage.getItem('login');
        const user = JSON.parse(string);
        return user ? user.role : '';
    };

    const [role, setRole] = useState(getRole());

    const saveLogin = user => {
        sessionStorage.setItem('login', JSON.stringify(user));
        setUsername(user.username);
        setRole(user.role)
    };

    return {
        saveLogin,
        username,
        role,
    }
}