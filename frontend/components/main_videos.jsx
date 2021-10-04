import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import VideosIndexContainer from './videos/videos_index_container';


const MainVideos = () => (
    <div>
        <NavBar/>
        <VideosIndexContainer/>
    </div>
)

export default MainVideos