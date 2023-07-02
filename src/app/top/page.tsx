import { Metadata, NextPage } from "next"
import CardContainer from "../../components/CardContainer/CardContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import CardSearch from "../../components/CardSearch/CardSearch";
import ItemCardMap from "@/components/ItemCardMap/ItemCardMap";
import { ItemsTopMovie } from "@/typisation/types/types";
import { data } from "@/fakeData/fakeData";

export const metadata: Metadata = {
    title: 'Top 250 films ever | FilmLibary',
    description: 'Top 250 films ever by IMDb rating',
}

const page: NextPage = async () => {
    const topMovies: ItemsTopMovie[] = data;

    return (
        <>
            <CardContainer>
                <PageTitle title="Top 250 films ever" variant='h1' />
                <CardSearch topMovies={topMovies} />
                <ItemCardMap topMovies={topMovies} />
            </CardContainer>
        </>
    )
}

export default page;