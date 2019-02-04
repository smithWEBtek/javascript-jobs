class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :profession
  has_many :jobs
  has_many :employers, through: :jobs

end
