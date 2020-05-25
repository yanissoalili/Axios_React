import React from 'react'
// we use withRouter to have information about routing or routing props for the parents elements
// import { withRouter } from 'react-router-dom'
import './Post.css'

const post = (props) => (
  <article className='Post' onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className='Info'>
      <div className='Author'>{props.author}</div>
    </div>
  </article>
)
// export default withRouter(post)
export default post
