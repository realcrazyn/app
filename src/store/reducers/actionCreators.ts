import { FilmActionCreators } from './film/actionCreators'
import { MainActionCreators } from './main/actionCreators'

export const allActionCreators = {
  ...FilmActionCreators,
  ...MainActionCreators,
}
