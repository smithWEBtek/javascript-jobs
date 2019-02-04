# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



 #
 Employer.create(name: "John Williams", password: "123", uid: "unedefind", email: "john@gmail.com  "  )
 Employee.create(name: "Robert Smith", password: "123", uid: "unedefind", email: "robert@gmail.com"  )
 Job.create(title: "Garden service", employer_id:  "1", address: "123 Union St.", state:  "NY", date: "2020-03-28T00:00:00.000Z")
 Job.create(title: "Home service", employer_id:  "1", address: "123 troy ave.", state:  "NY", date: "2019-12-28T00:00:00.000Z")
 Job.create(title: "Cleaning service", employer_id:  "1", employee_id:  "1", address: "123 Union St.", state:  "NY", date: "2020-03-28T00:00:00.000Z")
 
