import { FilmAction, FilmActionsEnum, FilmState } from './types'

const initialState: FilmState = {
  currentFilm: null,
}

const filmsReducer = (state = initialState, action: FilmAction): FilmState => {
  switch (action.type) {
    case FilmActionsEnum.SET_FILM:
      return { ...state, currentFilm: action.payload }
    case FilmActionsEnum.SET_STATE:
      return { ...action.payload, currentFilm: null }
    case FilmActionsEnum.ADD_COMMENT:
      localStorage.setItem(
        'commentData',
        JSON.stringify({
          ...state,
          [action.payload.filmId]: state[action.payload.filmId]
            ? [...state[action.payload.filmId], action.payload.comment]
            : [action.payload.comment],
        })
      )
      return {
        ...state,
        [action.payload.filmId]: state[action.payload.filmId]
          ? [...state[action.payload.filmId], action.payload.comment]
          : [action.payload.comment],
      }
    case FilmActionsEnum.DELETE_COMMENT:
      localStorage.setItem(
        'commentData',
        JSON.stringify({
          ...state,
          [action.payload.filmId]: state[action.payload.filmId].filter(
            (comment) => comment.commentId !== action.payload.commentId
          ),
        })
      )
      return {
        ...state,
        [action.payload.filmId]: state[action.payload.filmId].filter(
          (comment) => comment.commentId !== action.payload.commentId
        ),
      }

    default:
      return state
  }
}

export default filmsReducer
