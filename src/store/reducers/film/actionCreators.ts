import {
  AddCommentAction,
  DeleteCommentAction,
  FilmActionsEnum,
  FilmState,
  SetFilmAction,
  SetStateAction,
} from './types'
import axios from 'axios'
import { IFilm } from '../../../models/IFilm'
import {
  IAddCommentPayload,
  IDeleteCommentPayload,
} from '../../../models/IComment'

export const FilmActionCreators = {
  setState: (state: FilmState): SetStateAction => ({
    type: FilmActionsEnum.SET_STATE,
    payload: state,
  }),
  setFilm: (film: IFilm): SetFilmAction => ({
    type: FilmActionsEnum.SET_FILM,
    payload: film,
  }),
  deleteComment: (payload: IDeleteCommentPayload): DeleteCommentAction => ({
    type: FilmActionsEnum.DELETE_COMMENT,
    payload,
  }),
  addComment: (payload: IAddCommentPayload): AddCommentAction => ({
    type: FilmActionsEnum.ADD_COMMENT,
    payload,
  }),
}
