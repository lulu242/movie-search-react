import { About } from "../routes/About"
import { Home } from "../routes/Home"
import { Movie } from "../routes/Movie"
import { NotFound } from "../routes/NotFound"

export const menus = [
  {name: 'Search', href: '/'},
  {name: 'Movie', href: '/movie?id=tt4520988'},
  {name: 'About', href: '/about'}
]

export const routes = [
  {path: '/', component: Home},
  {path: '/movie', component: Movie},
  {path: '/about', component: About},
  {path: '/*', component: NotFound},
]

export const myData = {
  photo: 'https://velog.velcdn.com/images/heelieben/post/63766f3f-ffd7-445e-a7bc-41ba722c7cf0/image.png',
  name: 'WonYeongEun',
  email: 'woneun10@gmail.com',
  blog: 'https://velog.io/@lulu',
  github: 'https://github.com/lulu242',
  repository: 'https://github.com/lulu242/movie-search-react'
}
export interface SimpleMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export interface DetailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface moviesState {
  searchText: string
  page: number
  pageMax: number
  movies: SimpleMovie[]
  movie: DetailedMovie
  message: string
  loading: boolean
}


