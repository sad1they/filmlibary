'use client';

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Grid, Link } from "@mui/material";
import NextLink from "next/link";
import styles from "./Footer.module.scss";
import CardContainer from "../CardContainer/CardContainer";

const Footer = () => {
    return (
        <Box
            sx={{mt: '2rem', p: '1rem 0', backgroundColor: 'primary.main'}}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <CardContainer className={styles.footer_container}>
                        <Grid item xs={12} md={6} className={styles.footer_grid}>
                            {/* Desktop */}
                            <LocalMoviesIcon
                                color="secondary"
                                sx={{display: { xs: "none", md: "flex" }, mr: 1}}
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

                            {/* Mobile */}
                            <LocalMoviesIcon
                                color="secondary"
                                sx={{display: { xs: "flex", md: "none" }, mr: 1}}
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
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.footer_grid}>
                            <Box>
                                <Typography
                                    variant="body1"
                                    component="div"
                                    color="text.secondary"
                                >
                                    Copyright © {new Date().getFullYear()} FilmLibary.
                                </Typography>
                            </Box>
                        </Grid>
                    </CardContainer>
                </Toolbar>
            </Container>
        </Box>
    )
}

export default Footer;