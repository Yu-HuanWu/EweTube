export const fetchComments = (videoId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/comments`
    })
}

export const createComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: `/api/videos/${comment.video_id}/comments`,
        data: comment,
        contentType: false,
        processdata: false,
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