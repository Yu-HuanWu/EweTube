export const fetchLikes = (videoId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/likes',
        data: {videoId}
    })
}

export const createLike = (like) => {
    return $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
}

export const updateLike = (like) => {
    return $.ajax({
        method: 'PUT',
        url: `/api/likes/${like.id}`,
        data: {like},
    })
}

export const deleteLike = (like) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likse/${like.id}`,
    })
}