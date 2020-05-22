import React, { Component } from 'react'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'
import axios from '../../Axios'


class Blog extends Component {
    state={
        posts:[],
        selectedPostId:null,
        errorShow:false
    }
  componentDidMount () {
    axios.get('/posts')
      .then(res => {
        const posts= res.data.slice(0,4) 
        const updatePosts = posts.map(post => {
           return {
                ...post,
                author:'Yanis'
            }
        })

        this.setState({posts:updatePosts})
      })
      .catch(err => {
        this.setState({
            errorShow:true
        })
      })
  }
  postSlecetedHandler=(id) =>{
      this.setState({
          selectedPostId:id
      })

  }

  render () {
      let posts = <p style={{textAlign:'center'}}> Server Error</p>
      if(!this.state.errorShow) {
        posts= this.state.posts
        .map(post =>{
            return  <Post key={post.id}
          author={post.author} 
          title = {post.title}
          clicked={() => this.postSlecetedHandler(post.id)} /> 
        })
      }
      
      
    return (
      <div>
        <section className='Posts'>
          {posts}
        </section>
        <section>
          <FullPost id = {this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
