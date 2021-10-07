import React from 'react';

class LikesIndex extends React.Component {
    constructor(props){
        super(props)

        this.handleLike= this.handleLike.bind(this);
        this.updateLike= this.updateLike.bind(this);
        this.handleUnlike= this.handleUnlike.bind(this);
        this.requireLogin= this.requireLogin.bind(this);
    }
    
    requireLogin(){
        if (!this.props.currentUser) {
            this.props.history.push("/login");
            return false;
        }
        return true;
    }

    handleLike(e){
        if (this.requireLogin()){
            let likeObj;
            if (e.currentTarget.id === "like"){
                likeObj = {
                    num_likes: 1,
                    video_id: this.props.videoId,
                    user_id: this.props.currentUser.id
                };
            } else {
                likeObj = {
                    num_likes: 0,
                    video_id: this.props.videoId,
                    user_id: this.props.currentUser.id
                };
            }
            this.props.createLike(likeObj);
        }
    }

    updateLike(e){
        if (this.requireLogin()){
            let userLikes = Object.values(this.props.likes).filter(like => like.user_id === this.props.currentUser.id);
            let likeObj;
            if (e.currentTarget.id === "like") {
                likeObj= {
                    id: userLikes[0].id,
                    num_likes: 1,
                    video_id: this.props.videoId,
                    user_id: this.props.currentUser.id
                }
            } else {
                likeObj = {
                    id: userLikes[0].id,
                    num_likes: 0,
                    video_id: this.props.videoId,
                    user_id: this.props.currentUser.id
                }   
            }
            this.props.updateLike(likeObj);
        }
    }

    handleUnlike(e){
        if (this.requireLogin()) {
            let userLikes = Object.values(this.props.likes).filter(like => like.user_id === this.props.currentUser.id);
            this.props.deleteLike(userLikes[0]);
        }
    }

    render(){
        if (!this.props.likes){
            return (<div></div>)
        }
        let likes = Object.values(this.props.likes).filter(like=> like.num_likes === 1);
        let dislikes = Object.values(this.props.likes).filter(like=> like.num_likes === 0);

        let likeButtons;
        if (this.props.likedValue === 0){
            likeButtons = (
                <div>
                    <button onClick= {this.handleLike} id="like">
                        <img className="like-button" src={loginURL} alt="" />
                        <h1 className="unclicked">{likes.length}</h1>
                    </button>

                    <button onClick= {this.handleLike} id="dislike">
                        <img className="like-button" src={loginURL} alt="" />
                        <h1 className="unclicked">{dislikes.length}</h1>
                    </button>
                </div>
            )
        } else if (this.props.likedValue === 1) {
            likeButtons = (
                <div>
                    <button onClick={this.handleUnlike} id="like">
                        <img className="like-button" src={loginURL} alt="" />
                        <h1 className="clicked">{likes.length}</h1>
                    </button>

                    <button onClick={this.updateLike} id="dislike">
                        <img className="like-button" src={loginURL} alt="" />
                        <h1 className="unclicked">{dislikes.length}</h1>
                    </button>
                </div>
            )
        } else {
            likeButtons = (
                <div>
                    <button onClick={this.updateLike} id="like">
                        <img className="like-button" src={loginURL } alt="" />
                        <h1 className="unclicked">{likes.length}</h1>
                    </button>

                    <button onClick={this.handleUnlike} id="dislike">
                        <img className="like-button" src={loginURL} alt="" />
                        <h1 className="clicked">{dislikes.length}</h1>
                    </button>
                </div>
            )
        }

        return(
            <div>
                {likeButtons}
            </div>
        )
    }
}

export default LikesIndex;