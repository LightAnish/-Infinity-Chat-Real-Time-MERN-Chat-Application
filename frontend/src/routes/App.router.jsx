import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home.page.jsx";
import ChatPage from "../pages/Chat.page.jsx";
import ProfilePage from "../pages/Profile.page.jsx";
import LoginPage from "../pages/Auth/Login.page.jsx";
import SignUpPage from "../pages/Auth/SignUp.page.jsx";
import AuthProtected from "../hooks/ProtectedAuth.hook.jsx";
import RightChat from "../components/Chats/RightChat.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

    ],
  },
  {
    path: "/auth/login",
    element:  <LoginPage />
  
  },
  {
    path: "/auth/signup",
    element: <SignUpPage />


  },
        {
        path: "/chats",
        element: (<AuthProtected>
          <ChatPage />
        </AuthProtected>),
      },
      {
        path: "/user/chat",
        element: (<AuthProtected>
          <RightChat />
        </AuthProtected>),
      },
      {
        path: "/user/profile",
        element: (<AuthProtected>
          <ProfilePage/>
        </AuthProtected>),
      },
]);
