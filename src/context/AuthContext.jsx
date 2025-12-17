import React, { createContext, useContext, useMemo, useState } from 'react';

const AUTH_CODE = 'vilu';

const USER_PROFILES = {
    Vinicius: {
        name: 'Vinicius',
        description: 'Perfil de estudo pessoal',
        targets: [],
        accent: 'from-blue-500 to-purple-500',
    },
    Luana: {
        name: 'Luana',
        description: 'Perfil de estudo pessoal',
        targets: [],
        accent: 'from-emerald-500 to-teal-500',
    },
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const login = (code) => {
        if (code.trim().toLowerCase() === AUTH_CODE) {
            setIsAuthenticated(true);
            setErrorMessage('');
            return true;
        }
        setErrorMessage('Credencial inválida. Tente novamente.');
        return false;
    };

    const selectUser = (user) => {
        setSelectedUser(user);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setSelectedUser(null);
        setErrorMessage('');
    };

    const value = useMemo(
        () => ({
            isAuthenticated,
            selectedUser,
            login,
            selectUser,
            logout,
            errorMessage,
            userProfiles: USER_PROFILES,
        }),
        [isAuthenticated, selectedUser, errorMessage]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
