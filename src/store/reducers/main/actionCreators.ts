import {
  MainActionsEnum,
  SetErrorAction,
  SetFilmsAction,
  SetLoadingAction,
} from './types'
import axios from 'axios'
import { IFilm, IFilms } from '../../../models/IFilm'
import { httpGet } from '../../../http/http'

export const MainActionCreators = {
  setLoading: (loading: boolean): SetLoadingAction => ({
    type: MainActionsEnum.SET_LOADING,
    payload: loading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: MainActionsEnum.SET_ERROR,
    payload: error,
  }),
  setFilms: (films: IFilms): SetFilmsAction => ({
    type: MainActionsEnum.SET_FILMS,
    payload: films,
  }),

  getFilms: (adress: string) => (dispatch: any) => {
    dispatch(MainActionCreators.setLoading(true))

    httpGet(adress)
      .then((res) => {
        dispatch(MainActionCreators.setFilms(res.data))
        dispatch(MainActionCreators.setLoading(false))
      })
      .catch((e) => {
        console.log(e)

        dispatch(MainActionCreators.setFilms(e.message))
        dispatch(MainActionCreators.setLoading(false))
      })
  },
}
