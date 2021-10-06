import { connect } from 'react-redux';
import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
    let videoComments=[]
    if (Object.values(state.entities.comments)) {
        Object.values(state.entities.comments).forEach(comment => {
            if (comment.videoId == ownProps.videoId) {
                videoComments.push(comment);
            };
        })
    } else { console.log("no comment") }
    return ({
        currentUser: state.entities.users[state.session.id],
        comments: videoComments,
        videoId: ownProps.videoId,
    });
};

const mapDispatchToProps = dispatch => {
    console.log("mDTP")
    return ({
        fetchComments: videoId => dispatch(fetchComments(videoId)),
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);