'use client';

import { ItemsDataPosters } from "@/typisation/types/types";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./ItemList.module.scss";

type IProps = {
    item: ItemsDataPosters;
}

const ItemList = ({item}: IProps) => {

  return (
    <>
        <Grid item xs={12} md={12} sx={{display: 'flex'}}>
            <Card className={styles.card_item__list_view}>
                <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={styles.card_item__list_view__image}
                />
                <CardContent className={styles.card_item__list_view__content}>
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