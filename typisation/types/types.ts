import { TypographyTypeMap } from "@mui/material";
import { ReactNode } from "react";

interface ItemsTopMovie {
    id: string
    rank: string
    title: string
    fullTitle: string
    year: string
    image: string
    crew: string
    imDbRating: string
    imDbRatingCount: string
}

type RootNode = {
    children: ReactNode;
}

type TopMoviesData = {
    items: Array<ItemsTopMovie>
    errorMessage: string
}

type TChildren = {
    children: ReactNode
}

type TPageTitle = {
    title: string
    variant: TypographyTypeMap["props"]["variant"]
}

export type { 
    RootNode, TopMoviesData, ItemsTopMovie, TChildren, TPageTitle
};