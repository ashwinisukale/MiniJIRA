# frozen_string_literal: true

class Project < ApplicationRecord
  has_many :todos, dependent: :destroy
  has_many :user_projects, dependent: :destroy
  has_many :users, through: :user_projects

  validates :name, presence: true
  
  accepts_nested_attributes_for :users

  def update_with_users(params)
    return if params[:user_ids].blank?
    assign_users_to_project(params[:user_ids])
  end

  def assign_users_to_project(id)
    user = User.where(id: id).first
    return errors.add(:user, 'User does not exist') if user.blank?

    users << user if users.where(id: id).blank?
  end
end
