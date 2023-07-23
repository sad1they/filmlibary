import DetailsCard from "@/components/DetailsCard/DetailsCard";
import { ItemsTopMovie, TParams } from "@/typisation/types/types";
import { Metadata, NextPage } from "next";
import { data } from "@/fakeData/fakeData";

type Props = {
    params: { id: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const id = params?.id;

    const movie: ItemsTopMovie[] = data.filter(item => item.imdbid == id);
   
    return {
        title: movie[0].title,
        description: movie[0].description
    }
}

const page: NextPage<TParams> = async ({ params }) => {
    const { id } = params;
    
    return (
        <DetailsCard id={id} />
    )
}

export default page;
