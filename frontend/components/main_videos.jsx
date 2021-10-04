import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import SideMenu from './side_menu';
import VideosIndexContainer from './videos/videos_index_container';


const MainVideos = () => (
    <div className="main">
        <SideMenu/>
        <div className="main-main">
            <NavBar/>
            <VideosIndexContainer/> 
        </div>
    </div>
)

export default MainVideos