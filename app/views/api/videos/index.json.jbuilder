json.array! @videos do |video|
    json.extract! video, :id, :title
    json.videoUrl url_for(video.uploaded_video)
end