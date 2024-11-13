import { jwtDecode } from "jwt-decode";
import { DataStore } from "./datastore";

interface DecodedToken {
  exp: number;
  sub: string;
}

export const isAuthenticated = () => {
  const token = DataStore.get("ACCESS_TOKEN");
  if (!token) return false;

  try {
    const decodedToken = jwtDecode<DecodedToken>(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      DataStore.clear("ACCESS_TOKEN");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};
