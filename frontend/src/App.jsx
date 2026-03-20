import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import LandingPage from "./pages/LandingPage";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();
  console.log("authUser:", authUser);
  console.log("isCheckingAuth:", isCheckingAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  
  // if(true) return <LandingPage/>
  return (
    <div
      className="min-h-screen bg-[#f3eadf] relative flex items-center 
    justify-center p-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-[rgb(218,90,56)] opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-[rgb(218,90,56)] opacity-20 blur-[100px]" />

      <Routes>
        <Route path="/landing" element={<LandingPage />} />

        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to={"/signup"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          // element= {<LoginPage/>}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
          // element={<SignUpPage />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}
export default App;
