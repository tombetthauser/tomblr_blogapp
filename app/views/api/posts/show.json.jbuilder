json.partial! 'api/posts/post', post: @post
if @post.photo.attached?
  json.photoUrl url_for(@post.photo)
end