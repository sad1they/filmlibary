import { Metadata, NextPage } from "next"

export const metadata: Metadata = {
    title: 'News about films | FilmLibary',
    description: 'Best news about films, actors, hollywood',
  }

const page: NextPage = async () => {
    return (
        <h1>Film News</h1>
    )
}

export default page