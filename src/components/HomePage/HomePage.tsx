'use client';

import { Grid, Typography } from '@mui/material';
import PostersList from '../PostersList/PostersList';
import CardContainer from '../CardContainer/CardContainer';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <>
            <CardContainer className={styles.main_container}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="p">
                        the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3" className={styles.sub_title}>
                        New Movies
                    </Typography>
                </Grid>
                <PostersList />
            </CardContainer>
        </>
    )
}

export default HomePage;