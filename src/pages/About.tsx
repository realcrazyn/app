import { Button, Image } from 'antd'
import React from 'react'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'
import { Comments } from '../components/Comments'

export const About = () => {
  const { film } = useTypeSelector((state) => state)
  const navigate = useNavigate()

  return (
    <>
      {film.currentFilm ? (
        <div className="container">
          <div className="film__card">
            <div className="film__card_title">
              <Button
                title="Back to main"
                className="button_clear"
                icon={<ArrowLeftOutlined />}
                onClick={() => {
                  navigate(RouteNames.MAIN)
                }}
              />
              <h3 className="film__card_title-text">
                {film.currentFilm.title_long}
              </h3>
            </div>
            <div className="film__card_content">
              <div className="film__card_img">
                <Image
                  src={film.currentFilm.large_cover_image}
                  alt="film_img"
                />
              </div>
              <div className="film__card_descr">
                <p className="description__title">
                  {film.currentFilm.genres?.map((g, i) => (
                    <span key={i} className="description__title_genres">
                      {g}
                    </span>
                  ))}
                </p>
                <p className="film__card_description__block">
                  Language: {film.currentFilm.language}
                </p>
                <p className="film__card_description__block">
                  Rate:{' '}
                  <span
                    style={{
                      color: film.currentFilm.rating
                        ? film.currentFilm.rating > 7
                          ? 'green'
                          : film.currentFilm.rating > 5
                          ? 'orange'
                          : 'red'
                        : 'black',
                    }}
                  >
                    {film.currentFilm.rating}
                  </span>
                </p>
                <p className="film__card_description__block">
                  Uploaded: {film.currentFilm.date_uploaded}
                </p>
                <p className="film__card_description__block">
                  Runtime: {film.currentFilm.runtime} minutes
                </p>

                <p className="film__card_description-text">
                  {film.currentFilm.description_full?.replaceAll('&#39;', "'")}
                </p>
                <Comments
                  filmId={film.currentFilm.id}
                  comments={film[film.currentFilm.id]}
                />
              </div>
            </div>
            <div className="film__card_comments"></div>
          </div>
        </div>
      ) : (
        <p>Reload the page</p>
      )}
    </>
  )
}
