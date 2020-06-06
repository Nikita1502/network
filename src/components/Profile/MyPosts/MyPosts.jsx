import React from 'react';
import App from "../../../App";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                new post
            </div>
            <div className='posts'>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default MyPosts;