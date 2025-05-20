import supabase from "@/features/supabase";
import { useAuthStore } from "@/features/zustand/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function RootLayout() {
  const user = useAuthStore((state) => state.user);
  const { setUser } = useAuthStore((state) => state.actions);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getUser();
      setUser(data.user);

      supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session?.user || null);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      });
    })();
  }, [setUser]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <header>Header</header>
      <Outlet />
    </>
  );
}
