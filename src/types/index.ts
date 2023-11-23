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