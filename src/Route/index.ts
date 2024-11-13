import Home from "../pages/Home";
import Login from "../pages/Login"
import Owner from "../pages/Owner";

interface Route {
  path: string;
  element: React.FC;
  label?: string;
  protected?: boolean;
}

export const routes: Route[] = [
  { path: '/', element: Home, label: 'Home', protected: true },
  { path: '/login', element: Login, label: 'Login' },
  { path: '/owner', element: Owner, label: 'owner' },
];