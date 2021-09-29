json.extract! video, :id, :title, :description, :user_id, :uploader_id

json.user video.user.username
json.videoUrl url_for(video.uploaded_video)

if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
else
    json.thumbnail ""
end