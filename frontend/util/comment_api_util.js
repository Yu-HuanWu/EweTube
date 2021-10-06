export const fetchComments = (videoId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/comments`
    })
}

export const createComment = (comment) => {
    console.log(comment.video_id)
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
    return $.ajax({
        methodd: 'DELETE',
        url: `/api/videos/${comment.video_id}/comments/${comment.id}`
    })
}