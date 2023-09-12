import { createContext, useState,useEffect,useRef} from "react";
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';

export const AccountContext = createContext('');

const AccountProvider = ({children}) => {

    const [account, setAccount] = useState();
   const [activeUsers,setActiveUsers] = useState([]);
   const [newMessageFlag, setNewMessageFlag] = useState(false);
    const socket = useRef();

    useEffect(()=>{
        socket.current = io('ws://localhost:9000');
    },[])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}
        >
            {children}
        </AccountContext.Provider>
    )

}

AccountProvider.propTypes = {
    children:PropTypes.node
}
export default AccountProvider;