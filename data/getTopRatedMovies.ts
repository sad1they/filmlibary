import { ItemsTopMovie } from "../typisation/types/types";

const getTopRatedMovies = async (): Promise<Array<ItemsTopMovie>> => {
    const url: string = process.env.TOP250 + process.env.API_KEY!;
    
    const response = await fetch(url);
    const {items, errorMessage} = await response.json();

    if (!response.ok) {
        throw new Error(errorMessage);
    }

    return items;
    
}

export default getTopRatedMovies;