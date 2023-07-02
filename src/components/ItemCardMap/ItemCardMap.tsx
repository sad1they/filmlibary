'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ItemsTopMovie } from '@/typisation/types/types';
import ItemCard from '../ItemCard/ItemCard';
import { IPropsTopMovies, IState } from '@/typisation/interfaces/interfaces';
import { setBestMovies } from '@/store/slices/searchSlice';

const ItemCardMap = ({topMovies}: IPropsTopMovies<ItemsTopMovie[]>) => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: IState) => state.movie.query);
    const topMoviesList = useSelector((state: IState) => state.movie.bestMovies);

    useEffect(() => {
        dispatch(setBestMovies(topMovies));
    }, []);

    return (
        <>
            {topMoviesList.filter((el) =>
                el.title.toLowerCase().includes(searchValue.toLowerCase())
            ).map((item: ItemsTopMovie) =>
                <ItemCard {...item} key={item.id} />
            )}
        </>
    )
}

export default ItemCardMap;
