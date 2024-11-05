import React from 'react';
import { Route, redirect, RouteProps } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface AuthenticatedRouteProps extends RouteProps {
  // The component that should be rendered when the user is authenticated
  component: React.FC;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <redirect to="/" /> // Redirect to home if not authenticated
      }
    />
  );
};

export default AuthenticatedRoute;
