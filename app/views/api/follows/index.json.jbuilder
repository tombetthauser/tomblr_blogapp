# json.array! @follow do |follow|
#   json.extract! follow, :follower_id, :followed_blog_id
# end

@follows.each do |follow|
  json.set! follow.id do
    json.partial! 'follow', follow: follow
  end
end