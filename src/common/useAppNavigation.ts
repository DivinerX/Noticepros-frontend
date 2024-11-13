import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return { navigateToLogin, navigateToHome };
};