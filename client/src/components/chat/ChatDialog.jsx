import { Dialog,Box,styled} from "@mui/material";
import Menu from "../menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


const Component = styled(Box)`
    display: flex;
`;
const LeftComponent = styled(Box)`
    min-width: 450px;
`;
const RightComponent = styled(Box)`
width: 73%;
min-width: 300px;
height: 100%;
border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
const dialogStyle = {
    height: '95%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden',
    margin:'20px'
};
const ChatDialog = ()=>{

    const {person} = useContext(UserContext);

    return (
        <Dialog
        open={true}
        PaperProps={{ sx: dialogStyle }}
        maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {
                        Object.keys(person).length > 0 ? <ChatBox /> : <EmptyChat />
                    }
                        
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;