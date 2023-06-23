'use client';

import { memo } from 'react';
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { ItemsTopMovie } from '../../typisation/types/types';

const ItemCard = (item: ItemsTopMovie) => {
    return (
        <>
            <Grid item xs={12} md={4} sx={{display: 'flex'}}>
                <Card sx={{ 
                    maxWidth: 345, 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Image
                        src={item.image}
                        alt={item.fullTitle}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.crew}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rank: {item.rank}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rating: {item.imDbRating}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{mt: 'auto'}}>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default memo(ItemCard);