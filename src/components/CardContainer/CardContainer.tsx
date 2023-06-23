'use client';

import { Container, Grid } from "@mui/material";
import { ReactNode } from "react";
import { TChildren } from "../../typisation/types/types";

const CardContainer = ({children}: TChildren): ReactNode => {
    return (
        <Container maxWidth="lg" sx={{mt: 5}}>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </Container>
    )
}

export default CardContainer;