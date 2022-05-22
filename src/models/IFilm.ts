export interface IFilms {
  limit: number
  movie_count: number
  movies: IFilm[]
  page_number: number
}

export interface IFilm {
  background_image: string
  background_image_original: string
  date_uploaded: string
  date_uploaded_unix: string
  description_full: string
  genres: string[]
  id: number
  imdb_code: string
  language: string
  large_cover_image: string
  medium_cover_image: string
  mpa_rating: string
  rating: number
  runtime: number
  slug: string
  small_cover_image: string
  state: string
  summary: string
  synopsis: string
  title: string
  title_english: string
  title_long: string
  torrents: any[]
  url: string
  year: number
  yt_trailer_code: string
}
