import {
  IAddCommentPayload,
  IComment,
  IDeleteCommentPayload,
} from '../../../models/IComment'
import { IFilm } from '../../../models/IFilm'

export interface FilmState {
  currentFilm: null | IFilm
  [key: number]: IComment[] | []
}

export enum FilmActionsEnum {
  SET_FILM = 'SET_FILM',
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  SET_STATE = 'SET_STATE',
}

export interface SetStateAction {
  type: FilmActionsEnum.SET_STATE
  payload: FilmState
}

export interface SetFilmAction {
  type: FilmActionsEnum.SET_FILM
  payload: IFilm
}
export interface AddCommentAction {
  type: FilmActionsEnum.ADD_COMMENT
  payload: IAddCommentPayload
}
export interface DeleteCommentAction {
  type: FilmActionsEnum.DELETE_COMMENT
  payload: IDeleteCommentPayload
}

export type FilmAction =
  | SetFilmAction
  | AddCommentAction
  | DeleteCommentAction
  | SetStateAction
