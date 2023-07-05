'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useDeferredValue, useMemo, ReactNode } from 'react';
import { ItemsTopMovie } from '@/typisation/types/types';
import ItemCard from '../ItemCard/ItemCard';
import { IPropsTopMovies, IState } from '@/typisation/interfaces/interfaces';
import { setBestMovies } from '@/store/slices/searchSlice';

const ItemCardMap = ({topMovies}: IPropsTopMovies<ItemsTopMovie[]>) => {
    const dispatch = useDispatch();

    const searchValue = useSelector((state: IState) => state.movie.query);
    const topMoviesList = useSelector((state: IState) => state.movie.bestMovies);
    const deferredQuery = useDeferredValue(searchValue);

    const filterItems = () => {
        return topMoviesList.filter((el) =>
            el.title.toLowerCase().includes(deferredQuery.toLowerCase())
        ).map((item: ItemsTopMovie) =>
            <ItemCard {...item} key={item.id} />
        )
    }

    useEffect(() => {
        dispatch(setBestMovies(topMovies));
    }, []);

    const list = useMemo<ReactNode | void>(() => {
        filterItems();
    }, [deferredQuery]);

    return (
        <>
            {list ? list : filterItems()}
        </>
    )
}

export default ItemCardMap;
