import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function useRequireAuth({ redirectTo = '/' } = {}) {
    const { isAuthenticated, selectedUser, userProfiles } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(redirectTo, { replace: true });
            return;
        }

        if (isAuthenticated && !selectedUser) {
            navigate(redirectTo, { replace: true });
        }
    }, [isAuthenticated, selectedUser, navigate, redirectTo]);

    if (!selectedUser) {
        return null;
    }

    return userProfiles[selectedUser] || null;
}
