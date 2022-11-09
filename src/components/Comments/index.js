import {Component} from 'react'

import {v4} from 'uuid'

import CommentsItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const newComments = []

class Comments extends Component {
  state = {commentItems: newComments, nameInput: '', commentInput: ''}

  onName = event => {
    event.preventDefault()
    this.setState({nameInput: event.target.value})
  }

  onComment = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      like: false,
      date: new Date(),
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(previous => ({
      commentItems: [...previous.commentItems, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onDelete = id => {
    const {commentItems} = this.state
    this.setState({commentItems: commentItems.filter(each => each.id !== id)})
  }

  onLike = id => {
    this.setState(previous => ({
      commentItems: previous.commentItems.map(eachValue => {
        if (id === eachValue.id) {
          return {...eachValue, like: !eachValue.like}
        }
        console.log(eachValue)
        return eachValue
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, commentItems} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">Comments</h1>
          <div className="comment-container">
            <form className="comments-box">
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                className="person-name"
                placeholder="Your Name"
                onChange={this.onName}
                value={nameInput}
              />
              <textarea
                className="comment"
                onChange={this.onComment}
                value={commentInput}
                placeholder="Your Comment"
                rows="6"
              />

              <button className="btn" type="button" onClick={this.onAddComment}>
                Add Comment
              </button>
            </form>
            <div className="img-box">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <div className="user-comments-box">
            <p className="comments-count">{commentItems.length}</p>
            <p className="comments-head">Comments.</p>
          </div>
          <ul className="new-comments">
            {commentItems.map(each => (
              <CommentsItem
                key={each.id}
                details={each}
                deleteBtn={this.onDelete}
                likeBtn={this.onLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
