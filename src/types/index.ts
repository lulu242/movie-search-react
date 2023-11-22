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

