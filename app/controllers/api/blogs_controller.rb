class Api::BlogsController < ApplicationController

  before_action :require_login, only: [:create, :update, :destroy]

    def create
        @blog = Blog.new(blog_params) # <----- add current user id to params
        if @blog.save
            render `api/blog/show/#{params[:id]}` # <----- does it need this at all? does it need params[id]?
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end
    
    def update
        @blog = Blog.find(params[:id]) # <----- also search by user id
        if @blog.save
            render "api/blog/show/#{params[:id]}"
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @blog = Blog.find(params[:id])
        @blog.destroy
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