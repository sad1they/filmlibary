'use client';

import { dataPosters } from "@/fakeData/fekePostersData";
import { ItemsDataPosters } from "@/typisation/types/types";
import ItemList from "../ItemList/ItemList";

const PostersList = () => {
    const data: ItemsDataPosters[] = dataPosters;

    return (
        <>
            {data.map(item => (
                <ItemList item={item} key={item.title} />
            ))}
        </>
    )
}

export default PostersList;