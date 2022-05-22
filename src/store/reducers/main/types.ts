import { IFilms } from '../../../models/IFilm'

export interface MainState {
  filmsData: IFilms | null
  loading: boolean
  error: string
}

export enum MainActionsEnum {
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_FILMS = 'SET_FILMS',
}

export interface SetLoadingAction {
  type: MainActionsEnum.SET_LOADING
  payload: boolean
}
export interface SetErrorAction {
  type: MainActionsEnum.SET_ERROR
  payload: string
}
export interface SetFilmsAction {
  type: MainActionsEnum.SET_FILMS
  payload: IFilms
}

export type MainAction = SetLoadingAction | SetFilmsAction | SetErrorAction
