import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
    return (
            props.savedPosts.map(post => {
                const {id, type, user, webformatURL, tags} = post;
                return (
                    <div key={id} className={css.SearchItem}>
                        <p>{type}</p>
                        <p>{user}</p>
                        <img alt={type} src={webformatURL} />
                        <p>{tags}</p>
                    </div>
                );
            })
    )
}

export default PostItem