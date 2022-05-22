import { IFilm } from '../models/IFilm'
import React from 'react'
import { Card } from 'antd'
import { useActions } from '../hooks/useActions'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'

interface IProps {
  film: IFilm
}

export const FilmCard = ({ film }: IProps) => {
  const { setFilm } = useActions()

  const navigate = useNavigate()
  const redirectHandler = (film: IFilm) => {
    setFilm(film)
    navigate(RouteNames.ABOUT)
  }

  return (
    <Card
      onClick={() => {
        redirectHandler(film)
      }}
      key={film.id}
      title={
        <div className="films__card_title">
          <h5 className="films__card_title-text">{film.title}</h5>
          <div className="films__card_title-rate">
            <span
              style={{
                color:
                  film.rating > 7
                    ? 'green'
                    : film.rating > 5
                    ? 'orange'
                    : 'red',
              }}
            >
              {film.rating}
            </span>
          </div>
        </div>
      }
      className="films__card"
    >
      <div className="films__card_body">
        <div className="films__card_img">
          <img src={film.medium_cover_image} className="card__img_item" />
        </div>
        <div className="films__card_descr">
          <p className="description__title">
            {film.genres?.map((g, i) => (
              <span key={i} className="description__title_genres">
                {g}
              </span>
            ))}
          </p>
          <p className="description__text">
            {film.summary?.replaceAll('&#39;', "'")}
          </p>
        </div>
      </div>
    </Card>
  )
}
