export const fetchComments = (videoId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/comments`
    })
}

export const createComment = (comment) => {
    return $.ajax({
        method: "POST",
        url: `/api/videos/${comment.video_id}/comments`,
        data: {comment},
    })
}

export const updateComment = (comment) => {
    return $.ajax({
        method: 'PUT',
        url: `/api/videos/${comment.video_id}/comments/${comment.id}`
    })
}

export const deleteComment = (comment) => {
    console.log('api util')
    return $.ajax({
        method: 'DELETE',
        url: `/api/videos/${comment.videoId}/comments/${comment.id}`
    })
}