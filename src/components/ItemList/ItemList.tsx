'use client';

import { ItemsDataPosters } from "@/typisation/types/types";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

type IProps = {
    item: ItemsDataPosters;
}

const ItemList = ({item}: IProps) => {

  return (
    <>
        <Grid item xs={12} md={12} sx={{display: 'flex'}}>
            <Card sx={{
                display: 'flex',
                width: '100vw'
            }}>
                <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ 
                        height: 'auto',
                        flexBasis: '33.3%',
                        objectFit: 'cover',
                        minHeight: '300px'
                    }}
                />
                <CardContent sx={{
                    flexBasis: '66.6%'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </>
  )
}

export default ItemList;