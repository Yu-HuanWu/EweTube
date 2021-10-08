import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = props => {
    if (!props.comment) return null;

    const handleDelete = () => {
        console.log('handleDelete')
        console.log(props.comment.id)
        props.deleteComment(props.comment)
    }
    return (
        <div className="comment-index-item">
            <div className="comment-info">
                <div>
                    <Link to={`/users/${props.comment.user.id}`}>
                        <p className="user-avatar" style={{ backgroundColor: props.comment.user.color }}>{props.comment.user.username[0].toUpperCase()}</p>
                    </Link>
                    <div className="comment-item-text">
                        <div className="comment-header">
                            <div className="comment-item-username">
                                <Link to={`/users/${props.comment.user.id}`}>
                                {props.comment.user.username}
                                </Link>
                            </div>
                            <div id="comment-item-date">{props.comment.createdDate}</div>
                        </div>
                        <div className="comment-item-body">{props.comment.body}</div>
                    </div> 
                </div>
                {(!props.currentUser || props.currentUser.id !== props.comment.userId) ? (
                    <div></div>) : <button className="" onClick={()=>{handleDelete()}}>Delete</button>}
            </div>
        </div>
    )

};

export default CommentIndexItem;