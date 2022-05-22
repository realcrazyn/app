export interface IComment {
  text: string
  commentId: number
}

export interface IDeleteCommentPayload {
  filmId: number
  commentId: number
}

export interface IAddCommentPayload {
  comment: IComment
  filmId: number
}
