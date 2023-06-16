import { Metadata, NextPage } from "next"

export const metadata: Metadata = {
    title: 'Top 250 films ever | FilmLibary',
    description: 'Top 250 films ever by IMDb rating',
  }

const page: NextPage = async () => {
    return (
        <h1>Top 100 films ever</h1>
    )
}

export default page