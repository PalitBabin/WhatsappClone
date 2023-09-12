import { AppBar, Toolbar, Box, styled } from '@mui/material';
import LoginDialog from './account/LoginDialog';
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from './context/AccountProvider';

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;
const Component = styled(Box)`
height:100vh;
background: #DCDCDC;
`;

const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 225px;
    box-shadow: none;
`;
const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Component>

            {
                account ?
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>

                        <ChatDialog />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialog />
                    </>
            }
        </Component>
    )
}
export default Messenger;