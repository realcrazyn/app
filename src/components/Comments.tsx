import { Button, Form } from 'antd'
import React, { useState } from 'react'
import { IComment } from '../models/IComment'
import { DeleteOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'
import { useActions } from '../hooks/useActions'

interface IProps {
  filmId: number
  comments?: IComment[]
}

export const Comments = ({ filmId, comments }: IProps) => {
  const [commentText, setCommentText] = useState('')
  const { addComment, deleteComment } = useActions()

  const createCommentHandler = () => {
    let comment: IComment = { commentId: Date.now(), text: commentText }
    addComment({ comment, filmId })
    setCommentText('')
  }
  const deleteCommentHandler = (commentId: number) => {
    deleteComment({ filmId, commentId })
  }

  return (
    <div className="comments__container">
      <div className="comments__title"></div>
      <div className="comments__new">
        <Form.Item>
          <TextArea
            rows={4}
            onChange={(e) => {
              setCommentText(e.target.value)
            }}
            value={commentText}
          />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={commentText === '' ? true : false}
            htmlType="submit"
            onClick={() => {
              createCommentHandler()
            }}
            type="primary"
          >
            Add Comment
          </Button>
        </Form.Item>
      </div>
      {comments ? (
        <div className="comments__content">
          {comments.length > 0 ? <h4>Comments:</h4> : null}

          {comments.map((comment) => (
            <div className="comments__item" key={comment.commentId}>
              <div className="comments__item_text">{comment.text}</div>
              <div className="comments__item_settings">
                <Button
                  onClick={() => {
                    deleteCommentHandler(comment.commentId)
                  }}
                  className="button_clear"
                  icon={<DeleteOutlined style={{ color: 'red' }} />}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
