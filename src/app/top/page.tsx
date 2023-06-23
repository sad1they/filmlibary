import { Metadata, NextPage } from "next"
import getTopRatedMovies from "../../services/getTopRatedMovies"
import CardContainer from "../../components/CardContainer/CardContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import CardSearch from "../../components/CardSearch/CardSearch";
import ItemCardMap from "@/components/ItemCardMap/ItemCardMap";

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
                <CardSearch topMovies={topMovies} />
                <ItemCardMap topMovies={topMovies} />
            </CardContainer>
        </>
    )
}

export default page;