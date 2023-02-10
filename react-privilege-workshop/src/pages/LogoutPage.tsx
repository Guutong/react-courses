import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export function LogoutPage() {
  useEffect(() => {
    localStorage.setItem('token', '');
  }, []);

  return <Navigate to="/login" replace />;
}
