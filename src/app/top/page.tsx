import { Metadata, NextPage } from "next"
import getTopRatedMovies from "../../../data/getTopRatedMovies"
import { ItemsTopMovie } from "../../../typisation/types/types";
import ItemCard from "../../../components/ItemCard/ItemCard";
import CardContainer from "../../../components/CardContainer/CardContainer";
import PageTitle from "../../../components/PageTitle/PageTitle";

export const metadata: Metadata = {
    title: 'Top 250 films ever | FilmLibary',
    description: 'Top 250 films ever by IMDb rating',
}

const page: NextPage = async () => {
    const topMovies = await getTopRatedMovies();

    return (
        <>
            <CardContainer>
                <PageTitle title="Top 250 films ever" variant='h1' />
                {topMovies.map((item: ItemsTopMovie) =>
                    <ItemCard {...item} />
                )}
            </CardContainer>
        </>
    )
}

export default page;