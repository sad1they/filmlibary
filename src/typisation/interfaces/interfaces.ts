import { HTMLAttributes } from "react"
import { ItemsTopMovie } from "../types/types"


interface AutocompleteInput extends HTMLAttributes<HTMLLIElement> {
    key?: string
}

interface IState {
    movie: {
        query: string
        bestMovies: Array<ItemsTopMovie>
    },
    loading: {
        isLoading: boolean
    }
}

interface IPropsTopMovies<T> {
    topMovies: T
}

export type {
    AutocompleteInput, IState, IPropsTopMovies
}