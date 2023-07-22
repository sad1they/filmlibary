import { TypographyTypeMap } from "@mui/material";
import { ReactNode } from "react";

interface ItemsTopMovie {
    id: string
    rank: number
    title: string
    year: number
    image: string
    rating: string
    crew?: string
    imDbRatingCount?: string
    fullTitle?: string
    thumbnail?: string
    description?: string
    trailer?: string
    genre?: string[]
    director?: string[]
    writers?: string[]
    imdbid?: string
}

interface ItemsDataPosters {
    title: string
    image: string
    description: string
}

type RootNode = {
    children: ReactNode;
}

type TopMoviesData = {
    items: Array<ItemsTopMovie>
    errorMessage: string
}

type TChildren = {
    children: ReactNode,
    className?: string
}

type TPageTitle = {
    title: string
    variant: TypographyTypeMap["props"]["variant"]
}

type TParams = {
    params: { 
        id: string
    }
}

export type { 
    RootNode, TopMoviesData, ItemsTopMovie, TChildren, TPageTitle, TParams, ItemsDataPosters
};