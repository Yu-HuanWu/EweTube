import React from 'react';

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
                <p className="user-avatar" style={{ backgroundColor: props.comment.user.color }}>{props.comment.user.username[0].toUpperCase()}</p>
                <div className="comment-item-text">
                    <div className="comment-header">
                        <div className="comment-item-username">{props.comment.user.username}</div>
                        <div id="comment-item-date">{props.comment.createdDate}</div>
                    </div>
                    <div className="comment-item-body">{props.comment.body}</div>
                </div>
            </div>
            {(!props.currentUser || props.currentUser.id !== props.comment.userId) ? (
                <div></div>) : <button className="" onClick={()=>{handleDelete()}}>destroy</button>}
        </div>
    )

};

export default CommentIndexItem;