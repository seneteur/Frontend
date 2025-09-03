import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import paths from "./paths";
import {jwtDecode} from "jwt-decode";

interface PrivateRouteProps {
  children: ReactNode;
}
interface JWTPayload {
  email: string,
  exp: number,
  iat?: number;
  id?: string
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // Récupère le token depuis le localStorage
  const token = localStorage.getItem("token");

  // Si pas de token → redirection vers la page de connexion
  if (!token)  return <Navigate to={paths.signin} replace />;
  try {
      const decoded =jwtDecode<JWTPayload>(token);
    // verifie si le token est expiré
    if(decoded.exp * 1000< Date.now()){
      localStorage.removeItem("token");
      return <Navigate to={paths.signin} replace />;
    }
    
    return <>{children}</>;
  } catch  {
    //si le token est invalide
     localStorage.removeItem("token");
     return <Navigate to={paths.signin} replace />;
  }

  // Sinon, affiche les enfants (le composant protégé)
  return  children ;
};

export default PrivateRoute;
