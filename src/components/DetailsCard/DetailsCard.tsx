'use client';

import { data } from "@/fakeData/fakeData";
import Link from 'next/link'
import { Box, Button, Card, CardContent, Chip, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import CardContainer from "@/components/CardContainer/CardContainer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MovieIcon from '@mui/icons-material/Movie';
import { ItemsTopMovie } from "@/typisation/types/types";
import { useRouter } from "next/navigation";
import GradeIcon from '@mui/icons-material/Grade';
import DateRangeIcon from '@mui/icons-material/DateRange';

type TProps = {
    id: string
}

const DetailsCard = ({id}: TProps) => {
    const router = useRouter();
    const movie: ItemsTopMovie[] = data.filter(item => item.imdbid == id);
    
    return (
        <>
            <Card sx={{ width: 1 }}>
                <CardContainer>
                    <Grid item xs={12}>
                        <Button size="small" onClick={() => router.push(`/top`)}>
                            <ArrowBackIcon />
                            Back
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: 'flex'}}>
                            <Image
                                src={movie[0].image}
                                alt={movie[0].title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                    </Grid>
                    <Grid item xs={12} md={8} sx={{display: 'flex'}}>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h1">
                                    {movie[0].rank}. {movie[0].title}
                                </Typography>
                                <Typography variant="body1" component="h3">
                                    {movie[0].description}
                                </Typography>
                                <Typography variant="body1" marginTop='10px' sx={{display: 'flex'}}>
                                    <GradeIcon htmlColor="#f5c518" sx={{marginRight: '10px'}} /> {movie[0].rating}
                                </Typography>
                                <Typography variant="body1" marginTop='10px' sx={{display: 'flex'}}>
                                    <DateRangeIcon htmlColor="#1976d2" sx={{marginRight: '10px'}} /> {movie[0].year}
                                </Typography>
                                <Box sx={{margin: '20px 0'}}>
                                    {movie[0].genre!.map((item: string) => (
                                        <Chip key={item} label={item} variant="outlined" sx={{marginRight: '10px'}} />
                                    ))}
                                </Box>
                                <Typography variant="body1">
                                    <Box component='span' sx={{fontWeight: 'bold'}}>Director:</Box>
                                </Typography>
                                <List>
                                    {movie[0].director!.map((item: string) => (
                                        <ListItem key={item}>
                                            <ListItemText
                                                primary={item}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="body1">
                                    <Box component='span' sx={{fontWeight: 'bold'}}>Writers:</Box>
                                </Typography>
                                <List>
                                    {movie[0].writers!.map((item: string) => (
                                        <ListItem key={item}>
                                            <ListItemText
                                                primary={item}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Link href={movie[0].trailer!} target="_blank">
                                    <Button size="small" sx={{display: 'flex'}}>
                                        <MovieIcon sx={{marginRight: '10px'}} />
                                        Trailer
                                    </Button>
                                </Link>
                            </CardContent>
                    </Grid>
                </CardContainer>
            </Card>
        </>
    )
}

export default DetailsCard;