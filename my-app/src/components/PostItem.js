import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
    return (
            props.savedPosts.map(post => {
                const {title, name, image, description} = post;
                return (
                    <div key={title} className={css.SearchItem}>
                        <p>{title}</p>
                        <p>{name}</p>
                        <img alt={title} src={image} />
                        <p>{description}</p>
                    </div>
                );
            })
    )
}

export default PostItem