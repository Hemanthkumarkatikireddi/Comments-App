// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const image1 = (
  <div className="like-button">
    <img
      className="logo "
      src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
      alt="like"
    />
    <p className="like-p active">Like</p>
  </div>
)

const image2 = (
  <div className="like-button">
    <img
      className="logo"
      src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
      alt="like"
    />
    <p className="like-p">Like</p>
  </div>
)

const CommentsItem = props => {
  const {details} = props
  const {id, name, comment, like, date, initialClassName} = details
  //   const nameValue = name[0].toUpperCase()

  const onDelete = () => {
    const {deleteBtn} = props
    deleteBtn(id)
  }
  const time = formatDistanceToNow(date)

  const likedComment = like ? image1 : image2

  const onLike = () => {
    const {likeBtn} = props
    likeBtn(id)
  }
  const initial = name ? name[0].toUpperCase() : ''

  return (
    <li className="comment-lists-data">
      <div className="comments-Lists">
        <p className={initialClassName}>{initial}</p>
        <div className="c-box">
          <div className="person-details">
            <h1 className="person-name1">{name}</h1>
            <p className="post-time">{time} ago</p>
          </div>
          <p className="person-comment">{comment}</p>
        </div>
      </div>
      <div className="like-data">
        <button className="like-button" type="button" onClick={onLike}>
          {likedComment}
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={onDelete}
          // eslint-disable-next-line react/no-unknown-property
          testid="delete"
        >
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentsItem
