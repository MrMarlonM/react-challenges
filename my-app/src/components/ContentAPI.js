import React, { Component } from 'react'
import axios from 'axios'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import API_KEY from '../secrets'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [],
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }

    handleChange = (event) => {
        let userInput = event.target.value.toLowerCase();
        const filteredPost = this.state.savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(userInput);
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
                <PostItemAPI savedPosts={this.state.posts}/>
                : <Loader/>
            }
        </div>
      </div>
    )
  }
}

export default Content