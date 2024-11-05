import Home from "../pages/Home";
import Landlord from "../pages/Landlord";

interface Route {
  path: string;
  element: React.FC;
  label?: string;
}

export const routes: Route[] = [
  { path: '/', element: Home, label: 'Home' },
  { path: 'landlord', element: Landlord, label: 'Landlord' },
];