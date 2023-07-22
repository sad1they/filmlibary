import CardContainer from '@/components/CardContainer/CardContainer'
import HomePage from '@/components/HomePage/HomePage'
import PageTitle from '@/components/PageTitle/PageTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Films review from IMDb | FilmLibary',
  description: 'All information about films, actors, characters, etc… as on official websites',
}

export default function Home() {
    return (
        <>
            <CardContainer>
                <PageTitle title="FilmLibary is" variant='h1' />
                <HomePage />
            </CardContainer>
        </>       
    )
}
