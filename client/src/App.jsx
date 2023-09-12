import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./components/context/AccountProvider";
import UserProvider from "./components/context/UserProvider";

function App() {
  const clientId = '420923316664-u4co5gpeira7b30ilcmad70d5lna51gc.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  )
}

export default App
