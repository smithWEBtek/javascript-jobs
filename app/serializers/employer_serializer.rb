class EmployerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :jobs
  has_many :employees, through: :jobs
end
