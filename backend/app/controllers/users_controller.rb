class UsersController < ApplicationController
	before_action :authenticate_user!
	before_action :only_admin

  def index
  	# Returns all the developers
  	users = User.where(admin: false)
  	render json: users
  end

  def destroy
    user_project = UserProject.where(user_id: params[:id], project_id: params[:project_id]).first
    user_project.destroy if user_project.present?
  end
end
