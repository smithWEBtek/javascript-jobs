class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :address, :state, :date
  belongs_to :employee
  belongs_to :employer

end
