import React from 'react';
import CommentIndexItem from './comment_index_item.jsx';
import { Link } from 'react-router-dom'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            user_id: '',
            video_id: '',
        }

        this.updateComment = this.updateComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount(){
        this.props.fetchComments(this.props.videoId)
        if(!this.props.currentUser) {return null;}
        this.setState({
            user_id: this.props.currentUser.id,
            video_id: this.props.videoId,
        })
    }

    componentDidUpdate(prevProp){
        if (this.props.videoId !== prevProp.videoId) {
            this.setState({
                body: '',
                // user_id: this.props.currentUser.id,
                video_id: this.props.videoId,
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state);
        this.props.createComment(comment);
        this.setState({
            body: ''
        })
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({
            body: ''
        })
    }

    updateComment(e) {
        this.setState({
            body: e.target.value,
        })
    }

    render() {
        let currentUser = this.props.currentUser;
        let comments = this.props.comments;
        if (!comments) {return null;}

        let form;
        if(currentUser) {
            form= (
            <div>
                <h1>{comments.length} Comments</h1>
                <div className="comment-container">
                    <Link to={`/users/${currentUser.id}`}>
                        <p className="user-avatar" style={{ backgroundColor: currentUser.color }}>{currentUser.username[0].toUpperCase()}</p>
                    </Link>
                    <form className="comment-form" onSubmit={this.handleSubmit}> 
                        <textarea
                            className="comment-input-box"
                            placeholder="Add a public comment..."
                            value={this.state.body}
                            onChange={this.updateComment}
                        />
                        <div className="comment-buttons">
                            <button className="comment-cancel" onClick={this.handleCancel}>CANCEL</button>
                            <input className="comment-submit" type="submit" value="COMMENT" />
                        </div>
                    </form>
                </div>    
            </div>
            )} else {form = (<div></div>)}
        return (
            <div className="comment-section">
                {form}
                {comments.map(comment => {
                    if (comment.videoId === this.props.videoId) {
                        return <CommentIndexItem key={comment.id}
                            comment={comment}
                            currentUser={this.props.currentUser}
                            deleteComment={this.props.deleteComment}
                        />
                    };
                })}
            </div>
        )
    }

}

export default CommentIndex;