import Home from "../pages/Home";
import Login from "../pages/Login"
import Owner from "../pages/Owner";
import Property from "../pages/Property";
import Tenant from "../pages/Tenant";
import Notice from '../pages/Notice';

interface Route {
  path: string;
  element: React.FC;
  label?: string;
  protected?: boolean;
}

export const routes: Route[] = [
  { path: '/login', element: Login, label: 'Login' },
  { path: '/', element: Home, label: 'Home', protected: true },
  { path: '/owner', element: Owner, label: 'Owner', protected: true },
  { path: '/property', element: Property, label: 'Property', protected: true },
  { path: '/tenant', element: Tenant, label: 'Tenant', protected: true },
  { path: '/notice', element: Notice, label: 'Notice', protected: true },
];