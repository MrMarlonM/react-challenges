import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleChange = (event) => {
        let userInput = event.target.value.toLowerCase();
        const filteredPost = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(userInput);
        })
        setFetchedPosts(filteredPost);
    }

    return (
        <div>
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input
                            type="search"
                            id="searchInput"
                            onChange={(event) => {handleChange(event)}}
                        />
                        <h4>Posts found: {fetchedPosts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {
                        isLoaded ?
                            <PostItem savedPosts={fetchedPosts} />
                            : <Loader />
                    }
                </div>
            </div>
        </div>
    )
}

export default ContentHooks