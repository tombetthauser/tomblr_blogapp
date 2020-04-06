class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def show
        # prevents n+1 ?
        @user = User.find(params[:id]).includes(:follows)
    end

    def follows
        # @follows = User.find(params[:id]).follows
        # respond_to do |format|
        #     format.json 
        # end
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end