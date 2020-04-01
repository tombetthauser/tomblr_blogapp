class Api::PostsController < ApplicationController

#   before_action :require_login, only: [:create, :update, :destroy]

    def create
        @post = Post.new(post_params)
        # @post.author_id = current_user.id
        debugger
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    
    def update
        @post = Post.find(params[:id])
        if @post.save
            render "api/post/show/"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render :show
    end

    def index
        # @posts = Post.all.includes(:user)
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
    end

    private

    def post_params
        params.require(:post).permit(:title, :text, :pic_url, :blog_id, :photo)
    end
end