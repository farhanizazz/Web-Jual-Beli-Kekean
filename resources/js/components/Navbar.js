import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { SwipeableDrawer, Typography, IconButton, AppBar, Toolbar, useScrollTrigger, Slide } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

export default function Navbar() {
    const login = true;
    function isLogin() {
        if (login) {
            return (
                <>
                    <Box
                        className="nav-right"
                        sx={{ display: { mobile: "none", laptop: "block" } }}
                    >
                        <a href="#" className="bx bx-search"></a>
                        <a href="#" className="bx bx-heart"></a>
                        <a href="#" className="bx bx-shopping-bag"></a>
                        <a href="#" className="bx bx-user"></a>
                    </Box>
                </>
            );
        } else {
            return (
                <div className="nav-right">
                    <a href="#">Login</a>
                </div>
            );
        }
    }
    const [drawerState, setDrawerState] = React.useState(false);
    return (
        <>
            <SwipeableDrawer
                anchor="left"
                open={drawerState}
                onClose={() => setDrawerState(false)}
                onOpen={() => setDrawerState(true)}
            >
                <Box
                    p={2}
                    width="250px"
                    textAlign="center"
                >
                    <Typography>Side Panel</Typography>
                </Box>
            </SwipeableDrawer>
            <AppBar sx={{display: { mobile: "block", laptop: "none" }, bgcolor: "white", boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.17)'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setDrawerState(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        sx={{ flexGrow: 1 }}
                        textAlign={'center'}
                        color={'black'}
                    >
                        Kekean
                    </Typography>
                    <Button color="inherit">
                        <Typography fontSize={20} href="#" className="bx bx-cart"></Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            <Container
                sx={{
                    justifyContent: "center",
                    height: 60,
                    display: { mobile: "none", laptop: "block" },
                }}
            >
                <AppBar elevation={0} sx={{display: { mobile: "none", laptop: "block" }, bgcolor: "#f9fafc"}}>
                <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1}} >
                        <Typography
                            color={'black'}
                            px={2}
                        >
                            Shop
                        </Typography>
                        <Typography
                            color={'black'}
                            px={2}
                        >
                            Article
                        </Typography>
                        <Typography
                            color={'black'}
                            px={2}
                        >
                            Contact Us
                        </Typography>
                    </Box>
                    <Button color="inherit">
                        <Typography fontSize={20} href="#" className="bx bx-cart"></Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography fontSize={20} href="#" className="bx bx-cart"></Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography fontSize={20} href="#" className="bx bx-cart"></Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography fontSize={20} href="#" className="bx bx-cart"></Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            </Container>
        </>
    );
}
