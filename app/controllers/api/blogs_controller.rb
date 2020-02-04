class Api::BlogsController < ApplicationController

  before_action :require_login, only: [:create, :update, :destroy]

    def create
        @blog = Blog.new(blog_params)
        @blog.author_id = current_user.id

        if @blog.save
            render :show
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end
    
    def update
        @blog = Blog.find(params[:id])
        if @blog.save
            render "api/blog/show/"
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @blog = Blog.find(params[:id])
        @blog.destroy
        render json: @blog
    end

    def index
        @blogs = Blog.all
    end

    def show
        @blog = Blog.find(params[:id])
    end

    private

    def blog_params
        params.require(:blog).permit(:title, :description)
    end
end