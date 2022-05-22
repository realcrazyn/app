import { MainAction, MainActionsEnum, MainState } from './types'

const initialState: MainState = {
  error: '',
  filmsData: null,
  loading: false,
}

const mainReducer = (state = initialState, action: MainAction): MainState => {
  switch (action.type) {
    case MainActionsEnum.SET_LOADING:
      return { ...state, loading: action.payload }
    case MainActionsEnum.SET_ERROR:
      return { ...state, error: action.payload }
    case MainActionsEnum.SET_FILMS:
      return { ...state, filmsData: action.payload }

    default:
      return state
  }
}

export default mainReducer
