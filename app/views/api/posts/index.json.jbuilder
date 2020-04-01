# json.array! @posts do |post|
#   json.extract! post, :id, :title
#   json.photoUrl url_for(post.photo)
# end


@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    if post.photo.attached?
      json.photoUrl url_for(post.photo)
    end
  end
end