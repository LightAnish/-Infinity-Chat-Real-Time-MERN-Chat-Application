import {Navigate} from 'react-router-dom';
import { useAuth } from '../contexts/Auth.context.jsx'

const AuthProtected = ({ children }) => {
  const { user } = useAuth();
  

  if (!user) {
    // User is authenticated, redirect to the home page
    return <Navigate to="/auth/login" replace />;
  
  } 

  return children;
}

export default AuthProtected;