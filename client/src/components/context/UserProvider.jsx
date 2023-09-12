import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [person,setPerson] = useState({});
    return (
        <UserContext.Provider value={{
            person,
            setPerson
        }}
        >
            {children}
        </UserContext.Provider>
    )

}

UserProvider.propTypes = {
    children:PropTypes.node
}
export default UserProvider;