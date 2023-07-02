import DetailsCard from "@/components/DetailsCard/DetailsCard";
import { TParams } from "@/typisation/types/types";
import { NextPage } from "next";

const page: NextPage<TParams> = async ({ params }) => {
    const { id } = params;
    
    return (
        <DetailsCard id={id} />
    )
}

export default page;
