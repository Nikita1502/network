import React from 'react';
import App from "../../App";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://i4.imageban.ru/out/2010/12/01/652d533d3271a37c768ee9ffeab11c4c.png"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;