import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleChange = (event) => {
        let userInput = event.target.value.toLowerCase();
        const filteredPost = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(userInput);
        })
        this.setState({
            posts: filteredPost,
        })
    }

    render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
                <label htmlFor="searchInput">Search:</label>
                <input 
                    type="search" 
                    id ="searchInput"
                    onChange ={ (event) => this.handleChange(event)}
                />
                <h4>Posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
            {
                this.state.isLoaded ? 
                <PostItem savedPosts={this.state.posts}/>
                : <Loader/>
            }
        </div>
      </div>
    )
  }
}

export default Content