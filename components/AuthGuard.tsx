import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ReactNode } from "react";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!user) {
        router.replace("/auth");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [user]);

  return user ? children : null;
};

export default AuthGuard;
