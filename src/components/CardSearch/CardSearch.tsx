'use client';

import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';
import { ItemsTopMovie } from '../../typisation/types/types';
import { AutocompleteInput, IPropsTopMovies } from '../../typisation/interfaces/interfaces';
import { setSearch } from '@/store/slices/searchSlice';

const CardSearch = ({topMovies}: IPropsTopMovies<ItemsTopMovie[]>) => {
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value));       
    }

    return (
        <>
            <Grid item xs={12}>
                <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                    freeSolo
                    disableClearable
                    id="free-solo-2-demo"
                    options={topMovies.map((item: ItemsTopMovie) => item.title)}
                    renderOption={(props: AutocompleteInput) => (
                            <li {...props} key={props.id}>
                                {props.key}
                            </li>
                        )
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label='Search film'
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                            onChange={handleChange}
                            sx={{ "label": {color: 'text.primary'} }} 
                        />
                    )}
                />
                </Stack>
            </Grid>
        </>
    );
}

export default CardSearch;
