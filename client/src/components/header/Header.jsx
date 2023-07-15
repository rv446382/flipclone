import { useState } from 'react';

import { AppBar, Toolbar, styled, Box, Typography, Drawer, IconButton ,List} from "@mui/material";

///compoment
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";





const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;
const Component = styled(Link)`
    margin-left: 10%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});
const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false);


    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    const list = () => (
        <Box style={{ width: 200 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );
    return (
        <StyledHeader>
            <Toolbar>
                <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                {list()}
                </Drawer>
                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>

            </Toolbar>
        </StyledHeader>
    )
}
export default Header;