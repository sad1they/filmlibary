"use client";

import { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "@mui/material";
import NextLink from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Desktop */}
                    <LocalMoviesIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        className={styles.nav_menu__title_desktop}
                    >
                        <Link
                            href="/"
                            component={NextLink}
                            color="text.secondary"
                            className={styles.link_title_md}
                        >
                            FilmLibary
                        </Link>
                    </Typography>
                    <Box className={styles.mobile_box}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="secondary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" }, }}
                        >
                            <MenuItem key="top" onClick={handleCloseNavMenu}>
                                <Link
                                    href="/top"
                                    component={NextLink}
                                    color="text.primary"
                                    className={styles.link_title_xs}
                                >
                                    Top
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Mobile */}
                    <LocalMoviesIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        className={styles.nav_menu__title_mobile}
                    >
                        <Link
                            href="/"
                            component={NextLink}
                            color="text.secondary"
                            className={styles.nav_menu__title_mobile__link}
                        >
                            FilmLibary
                        </Link>
                    </Typography>
                    <Box className={styles.nav_menu__desktop}>
                        <Button key="top" onClick={handleCloseNavMenu}>
                            <Link
                                href="/top"
                                component={NextLink}
                                color="text.secondary"
                                className={styles.nav_menu__desktop__link}
                            >
                                Top
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
