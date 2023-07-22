'use client';

import { TPageTitle } from "../../typisation/types/types";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import styles from "./PageTitle.module.scss";

const PageTitle = ({title, variant}: TPageTitle) => {
    return (
        <Grid item xs={12}>
            <Typography variant={variant} className={styles.page_title} >
                {title}
            </Typography>
        </Grid>
    )
}

export default PageTitle;