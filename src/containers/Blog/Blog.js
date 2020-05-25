import React, { Component } from 'react'
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import './Blog.css'
import AsyncComponent from '../../hoc/AsyncComponent'

// to not charge our bundle with import we use AsyncNewPost when we need it 
const AsyncNewPost = AsyncComponent(()=>{
  return import ('./NewPost/NewPost')
})  
class Blog extends Component {
  state={
    auth:true 
  }
  render () {
    return (

      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/posts'
                  exact
                  activeClassName='my-active'
                  activeStyle={{ color: '#fa2c2c', textDecoration: 'underline' }}
                >Posts

                </NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/new-Post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}
                >
                    new Post
                </NavLink>
              </li>

            </ul>
          </nav>
        </header>
        {/* <Route path='/' render={() => <h1>home</h1>} />
        <Route path='/' exact render={() => <h2>new Post</h2>} /> */}
        <Switch>
          {this.state.auth? <Route path='/new-Post' exact component={AsyncNewPost} /> : null}
          <Route path='/posts' component={Posts} />
          {/* <Route render={() }=>  /> */}
          <Redirect from='/' to='/posts' />
        </Switch>

        {/* in some case when we have route with something in params /:id it will render it with other route in our case with the /new-Post
        so we use Switch
        */}
        {/* <Route path='/posts/:id' exact component={FullPost} /> */}

      </div>
    )
  }
}

export default Blog
