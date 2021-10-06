import React from 'react';
import CommentIndexItem from './comment_index_item.jsx';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            user_id: '',
            video_id: this.props.videoId,
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
        })
    }

    componentDidUpdate(prevProp){
        if ((prevProp.comments.length !== this.props.comments.length)||(prevProp.videoId !== this.props.videoId)){
            this.props.fetchComments(this.props.videoId);
            this.handleCancel
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
            <div className="">
                <p className="user-avatar" style={{ backgroundColor: currentUser.color }}>{currentUser.username[0].toUpperCase()}</p>
                <form className="" onSubmit={this.handleSubmit}>
                    <label> Comment
                        <input
                            className=""
                            type="text"
                            placeholder="Add a public comment..."
                            value={this.state.body}
                            onChange={this.updateComment}
                        />
                    </label>
                    <div className="comment-underline">
                        <div className="comment-emptybox"></div>
                        <div className="comment-button-container">
                            <button className="comment-cancel" onClick={this.handleCancel}>CANCEL</button>
                            <input className="comment-submit" type="submit" value="COMMENT" />
                        </div>
                    </div>
                </form>
            </div>
            )} else {form = (<div></div>)}
        return (
            <div className="comment-container">
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