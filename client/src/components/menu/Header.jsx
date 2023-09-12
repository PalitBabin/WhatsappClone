import { Box,styled } from "@mui/material";
import {HistoryToggleOff as Story, Chat as MessageIcon } from '@mui/icons-material';
import { useContext,useState } from "react";
import { AccountContext } from "../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../drawer/InfoDrawer";


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
});
const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        font-size: 22px;
        padding: 8px;
        margin-right: 8px;
        margin-top: 3px;
        color: #000;
    };
`;
const Header = ()=>{
    const {account} = useContext(AccountContext);

    const [openDrawer,setOpenDrawer] = useState(false);

    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }

    return (
        <>
        <Component>
            <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}/>
            <Wrapper>
                <Story />
                <MessageIcon />
                <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>
             <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/> 
        </Component>
        </>
    )
}
export default Header;