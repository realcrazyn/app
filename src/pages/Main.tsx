import { Pagination, Spin } from 'antd'
import React, { FC } from 'react'
import { FilmCard } from '../components/FilmCard'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'

export const Main: FC = () => {
  const { getFilms } = useActions()
  const { filmsData, loading, error } = useTypeSelector((state) => state.main)

  const loadFilmsHandler = (page: number = 1, size: number = 10) => {
    return getFilms(
      `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${size}`
    )
  }

  return (
    <div className="main__container">
      {loading ? (
        <div className="main__content_loader">
          <Spin size="large" />
        </div>
      ) : !error && filmsData ? (
        <div className="main__content">
          <Pagination
            defaultPageSize={filmsData?.limit}
            pageSizeOptions={[10, 20, 50]}
            total={filmsData?.movie_count}
            defaultCurrent={filmsData?.page_number}
            onChange={(e, size) => loadFilmsHandler(e, size)}
            onShowSizeChange={(e, size) => loadFilmsHandler(e, size)}
          />
          <div className="films__container">
            {filmsData?.movies?.map((film) => (
              <div className="films__card_container" key={film.id}>
                <FilmCard film={film} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>{error} Please reload the page</div>
      )}
    </div>
  )
}
