import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Films review from IMDb | FilmLibary',
  description: 'All information about films, actors, characters,etc… as on official websites',
}

export default function Home() {
  return (
    <h1>Welcome to FilmLibary</h1>              
  )
}
