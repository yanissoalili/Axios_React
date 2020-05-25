import React, { Component } from 'react'
import axios from '../../../Axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
 import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'
class Posts extends Component {
    state={
        posts:[],

    }
    postSlecetedHandler=(id) =>{
        // this.setState({
        //     selectedPostId:id
        // })
        this.props.history.push(`/posts/${id}`)


  
    }
    componentDidMount () { 
        console.log(this.props)
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
              console.log(err)
            // this.setState({
            //     errorShow:true
            // })
          })
      }

  render () {
      
    let posts = <p style={{ textAlign: 'center' }}> Server Error</p>
    if (!this.state.errorShow) {
      posts = this.state.posts
        .map(post => {
            return (
            // <Link
            //     to={`posts/${post.id}`}
            //     exact
            // >
                <Post
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    clicked={() => this.postSlecetedHandler(post.id)}
                />
        //   </Link>

            )
            
          
        })
    }
    return (
      
      <div>
            <section className='Posts'>
                {posts}
            </section>
          <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
      </div>
    )
  }
}
export default Posts
